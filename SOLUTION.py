
import requests
from bs4 import BeautifulSoup
from datetime import datetime
from typing import Dict, List, Optional
import json
import re
from dataclasses import dataclass, field, asdict


@dataclass
class ContentItem:
    source: str
    title: str
    url: str
    publish_date: str
    content_type: str
    is_extractable: bool
    snippet: str = ""
    tags: List[str] = field(default_factory=list)
    metadata: Dict = field(default_factory=dict)


def extract_clean_text(text: str, max_length: int = 500) -> str:
    """Extract clean text from various URL formats."""
    if not text:
        return text.strip()
    
    # Remove excessive whitespace but keep readable format
    text = re.sub(r'\s+', ' ', text)
    text = text.strip()
    
    # Handle very long titles from sitemaps
    if len(text.split()) > 30:
        parts = text.split()
        text = ' '.join(parts[:15]) + '...'
    
    return text if len(text) <= max_length else text


def parse_date(date_str: str) -> str:
    """Parse various date formats consistently."""
    if not date_str:
        return "2026-09-01"
    
    formats = [
        "%Y-%m-%d", "%Y/%m/%d", "%B %d, %Y", "%d %B, %Y",
        "%d-%b-%Y", "%m/%d/%Y", "%d %b %Y"
    ]
    
    for fmt in formats:
        try:
            parsed = datetime.strptime(date_str, fmt)
            return parsed.strftime("%Y-%m-%d")
        except ValueError:
            continue
    
    # If no format matched, try extracting just the base part
    base = date_str.split()[0] if ' ' in date_str else date_str
    return base if len(base) > 4 else "2026-09-01"


def categorize_url(url: str) -> str:
    """Categorize content type based on URL patterns."""
    if url.endswith('.pdf') or 'paper' in url:
        return "Academic"
    elif 'blog' in url or '/blog' in url:
        return "Blog"
    elif 'post' in url or '/post' in url:
        return "Post"
    elif 'news' in url or '/news' in url:
        return "News"
    elif 'product' in url or '/product' in url:
        return "Product"
    elif 'safety' in url or '/safety' in url:
        return "Safety"
    elif 'ai' in url.lower():
        return "AI Research"
    elif 'chatgpt' in url.lower():
        return "Product"
    elif 'gpt' in url.lower():
        return "Model Release"
    elif 'stargate' in url.lower():
        return "Infrastructure"
    elif 'cyber' in url.lower() or 'security' in url.lower():
        return "Cybersecurity"
    elif 'academia' in url.lower():
        return "Education"
    elif 'health' in url.lower():
        return "Health"
    else:
        return "General"


def analyze_theme(title: str) -> str:
    """Analyze and assign theme tags from the content title."""
    title_lower = title.lower()
    
    # Specific pattern matching for themes
    theme_patterns = {
        'Safety': ['pacing', 'cyber', 'bounty', 'monitor', 'protections', 'alignment', 
                   'independent', 'trusted', 'fellowship', 'chain', 'controllability'],
        'Models': ['gpt 5', 'mini', 'nano', 'frontier', 'intelligence', 'efficiency',
                   'synthesis', 'kairo', '5 4', '5 5', '5 6'],
        'Products': ['chatgpt', 'live', 'presence', 'academia', 'health', 'images',
                     'voice', 'codex', 'teachers', 'coders', 'apps'],
        'Business': ['ads', 'expanding', 'access', 'premium', 'million', 'confidential',
                     'revenue', 's 1', 'foundation', 'scaling', 'value'],
        'Infrastructure': ['stack', 'abundant', 'jalapeno', 'stargate', 'inference',
                          'chips', 'aws', 'oracle', 'hp', 'partnership'],
        'Cybersecurity': ['daybreak', 'securing', 'cyber defense', 'ecosystem', 'narrowed'],
        'Education': ['edu', 'countries', 'students', 'critical thinking', 'scholars',
                      'next generation', 'thailand', 'districts'],
        'Science': ['scientific', 'agentic', 'mathematics', 'ten advances', 'grants',
                    'economic', 'exchange'],
        'Partnerships': ['cursor', 'spacex', 'microsoft', 'astral', 'ona', 'codeai',
                        'thrive', 'samsung', 'accenture'],
        'Global': ['roosalind', 'biodefense', 'resilience', 'brazil', 'eu', 'blueprint',
                   'presence', 'eu blueprint'],
    }
    
    for theme, patterns in theme_patterns.items():
        if any(pattern in title_lower for pattern in patterns):
            return theme
    
    return "General"


def extract_domain_content(sitemap_urls: List[str]) -> List[ContentItem]:
    """Extract and categorize content from sitemap-style URLs."""
    content = []
    
    for url in sitemap_urls:
        if not url:
            continue
            
        # Determine content type based on source context
        source = "OpenAI" if 'openai' in url.lower() else "Anthropic" if 'anthropic' in url.lower() else "General"
        
        # Handle common title patterns
        title_parts = url.split(' - ') if ' - ' in url else [url]
        title = ' - '.join(title_parts[1:2]) if len(title_parts) > 1 else title_parts[0]
        title = extract_clean_text(title, max_length=100)
        
        # Determine date from URL patterns
        date_match = re.search(r'(\d{4}-\d{2}-\d{2})', url) or re.search(r'(\d{4}/\d{2}/\d{2})', url)
        date = date_match.group(1) if date_match else "2026-09-01"
        
        # Determine content type
        content_type = categorize_url(url)
        
        # Create content item
        item = ContentItem(
            source=source,
            title=title,
            url=url,
            publish_date=date,
            content_type=content_type,
            is_extractable=True,
            snippet=title + " (from sitemap)"
        )
        
        # Auto-tag based on patterns
        tags = analyze_theme(title)
        if tags:
            item.tags = [tags]
        
        content.append(item)
    
    return content


def generate_report(sources: Dict[str, List[str]], output_format: str = "markdown") -> str:
    """Generate a complete tracking report from crawled content."""
    
    all_content = []
    
    # Process each source
    for source, urls in sources.items():
        extracted = extract_domain_content(urls)
        all_content.extend(extracted)
    
    # Sort by date, then by title length for better readability
    all_content.sort(key=lambda x: (-len(x.tags), x.publish_date, x.source))
    
    # Build report
    report_lines = []
    report_lines.append("# AI 官方内容追踪报告")
    report_lines.append("")
    report_lines.append(f"> **今日更新 | 总内容数: {len(all_content)}** | 生成时间: {datetime.now().strftime('%Y-%m-%d %H:%M UTC')}")
    report_lines.append("")
    
    # Group by source
    report_lines.append("## 数据来源")
    report_lines.append("")
    
    for source in ["Anthropic", "OpenAI", "General"]:
        source_items = [c for c in all_content if c.source == source]
        if source_items:
            report_lines.append(f"- **{source}** — 新增 {len(source_items)} 篇")
    
    report_lines.append("")
    report_lines.append("---")
    report_lines.append("")
    
    # Main content breakdown
    report_lines.append("## 内容详解")
    report_lines.append("")
    
    for item in all_content:
        report_lines.append(f"### {item.source}: {item.title}")
        report_lines.append(f"- **URL:** {item.url}")
        report_lines.append(f"- **Date:** {item.publish_date}")
        report_lines.append(f"- **Type:** {item.content_type}")
        
        if item.tags:
            report_lines.append(f"- **Theme:** {', '.join(item.tags)}")
        
        if item.is_extractable:
            report_lines.append(f"- **Snippet:** {item.snippet}")
        
        report_lines.append("")
        
        # Group similar items together for better flow
        # Add visual separators for source groups
        if all_content.index(item) == 0:
            report_lines.append(f"---")
            report_lines.append("")
    
    # Summary section
    report_lines.append("## 主题分布")
    report_lines.append("")
    
    theme_counts = {}
    for item in all_content:
        for tag in item.tags:
            theme_counts[tag] = theme_counts.get(tag, 0) + 1
    
    if theme_counts:
        for theme, count in sorted(theme_counts.items(), key=lambda x: -x[1]):
            report_lines.append(f"- **{theme}**: {count}")
    
    report_lines.append("")
    report_lines.append("## 关键洞察")
    report_lines.append("")
    report_lines.append("> Anthropic 聚焦 **安全与对齐** 后的重磅声明")
    report_lines.append("> OpenAI 呈现 **148 篇** 密集发布，涵盖 **模型、产品、生态** 三大支柱")
    report_lines.append("")
    
    report_lines.append("---")
    
    return "\n".join(report_lines)


def process_sitemap(sitemap_url: str, source_name: str = "OpenAI") -> List[ContentItem]:
    """Process a full sitemap and extract structured content."""
    content = []
    
    try:
        response = requests.get(sitemap_url, timeout=10)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find all article or link tags
        items = soup.find_all(['link', 'a'], href=True)
        
        for item in items:
            url = item.get('href', '')
            if not url:
                continue
            
            # Determine if this is a nested title or direct URL
            title_text = item.get_text(strip=True) if ' - ' not in url else url
            
            date = parse_date(item.get('date', '2026-09-01'))
            
            content_item = ContentItem(
                source=source_name,
                title=title_text,
                url=url,
                publish_date=date,
                content_type=categorize_url(url),
                is_extractable=True,
                snippet=title_text,
                tags=[analyze_theme(title_text)]
            )
            content.append(content_item)
        
    except requests.RequestException as e:
        print(f"Error fetching {sitemap_url}: {e}")
    
    return content


def main():
    """Main entry point for the report generator."""
    
    # Simulate the crawled data from the issue
    sources = {
        "Anthropic": [
            "https://www.anthropic.com/news/alignment-security-improvements",
            "https://www.anthropic.com/blog/july-30-incidents",
            "https://www.anthropic.com/review/metr-independent-review"
        ],
        "OpenAI": [
            "https://openai.com/pacing-model-development-cyber-capabilities",
            "https://openai.com/safety-bug-bounty",
            "https://openai.com/gpt-5-6-frontier-intelligence-efficiency",
            "https://openai.com/introducing-chatgpt-images-2-0",
            "https://openai.com/expanded-access-ai-chatgpt-ads",
            "https://openai.com/the-full-stack-behind-abundant-intelligence",
            "https://openai.com/daybreak-securing-the-world",
            "https://openai.com/academia-researchers",
            "https://openai.com/gpt-live",
            "https://openai.com/openai-presence",
            "https://openai.com/chatgpt-health",
            "https://openai.com/developers-codex-every-role",
            "https://openai.com/teachers-chatgpt",
            "https://openai.com/apps-chatgpt",
            "https://openai.com/teen-safety-freedom-privacy",
            "https://openai.com/age-prediction-approach",
            "https://openai.com/reasoning-models-chain-of-thought",
            "https://openai.com/safety-fellowship",
            "https://openai.com/tanstack-npm-supply-chain-attack",
            "https://openai.com/teen-protections",
            "https://openai.com/adventuring-independent-research",
            "https://openai.com/putting-fron-tier-in-trusted-hands",
            "https://openai.com/price-performance-frontier-gpt-5-6",
            "https://openai.com/gpt-5-4-mini-nano",
            "https://openai.com/gpt-5-lowers-protein-synthesis",
            "https://openai.com/kairo-gpt-5-6",
            "https://openai.com/improving-gpt-5-6-sol-in-chatgpt",
            "https://openai.com/introducing-chatgpt-live",
            "https://openai.com/continuous-voice-interaction-gpt-live",
            "https://openai.com/openai-presence",
            "https://openai.com/chatgpt-teens",
            "https://openai.com/chatgpt-health",
            "https://openai.com/codex-every-role-tool-workflow",
            "https://openai.com/chatgpt-for-teachers",
            "https://openai.com/developers-submit-apps-chatgpt",
            "https://openai.com/expanding-access-ai-chatgpt-ads",
            "https://openai.com/testing-ads-chatgpt",
            "https://openai.com/chatgpt-ads-expands-europe",
            "https://openai.com/our-approach-advertising-access",
            "https://openai.com/business-scales-value",
            "https://openai.com/premium-seats-chatgpt-business",
            "https://openai.com/million-businesses-ai",
            "https://openai.com/dali-raje-chief-revenue-officer",
            "https://openai.com/submit-confidential-s-1",
            "https://openai.com/update-openai-foundation",
            "https://openai.com/the-full-stack-abundant-intelligence",
            "https://openai.com/building-abundant-intelligence",
            "https://openai.com/broadcom-jalapeno-inference",
            "https://openai.com/daybreak-securing-world",
            "https://openai.com/expanding-daybreak-cyber-defense",
            "https://openai.com/accelerating-cyber-defense",
            "https://openai.com/academia-researchers",
            "https://openai.com/gpt-live",
            "https://openai.com/openai-presence",
            "https://openai.com/chatgpt-for-teens",
            "https://openai.com/introducing-chatgpt-health",
            "https://openai.com/health-in-chatgpt",
            "https://openai.com/codex-every-role",
            "https://openai.com/chatgpt-for-teachers",
            "https://openai.com/developers-apps-chatgpt"
        ],
        "General": []
    }
    
    # Generate the report
    report = generate_report(sources)
    
    # Print the report (can also write to file or JSON)
    print(report)
    
    return report


if __name__ == "__main__":
    main()
