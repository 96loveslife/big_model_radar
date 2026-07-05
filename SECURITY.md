# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 5.1.x   | :white_check_mark: |
| 5.0.x   | :x:                |
| 4.0.x   | :white_check_mark: |
| < 4.0   | :x:                |

## Reporting a Vulnerability

Use this section to tell people how to report a vulnerability.

Tell them where to go, how often they can expect to get an update on a
reported vulnerability, what to expect if the vulnerability is accepted or
declined, etc.
tbaggery
tpope 會在這裡寫博客，如果他寫博客的話。

關於 Git 提交資訊的說明
2008年4月19日

我想花點時間詳細闡述如何寫出格式良好的提交資訊。我認為提交資訊格式的最佳實踐是 Git 優秀之處的體現之一。可以理解的是，rails.git 的一些早期提交資訊非常冗長，我想進一步解釋為什麼這是一種不好的做法。

以下是一個 Git 提交資訊的範例：

Capitalized, short (50 chars or less) summary

More detailed explanatory text, if necessary.  Wrap it to about 72
characters or so.  In some contexts, the first line is treated as the
subject of an email and the rest of the text as the body.  The blank
line separating the summary from the body is critical (unless you omit
the body entirely); tools like rebase can get confused if you run the
two together.

Write your commit message in the imperative: "Fix bug" and not "Fixed bug"
or "Fixes bug."  This convention matches up with commit messages generated
by commands like git merge and git revert.

Further paragraphs come after blank lines.

- Bullet points are okay, too

- Typically a hyphen or asterisk is used for the bullet, followed by a
  single space, with blank lines in between, but conventions vary here

- Use a hanging indent
讓我們先來看看將提交資訊限制在 72 列中的幾個好處。

git log它不會對提交資訊進行任何特殊的換行處理。使用預設分頁器時less -S，這表示段落會超出螢幕邊緣，難以閱讀。在 80 列的終端上，如果我們減去左側 4 列的縮排和右側 4 列的對稱性，就只剩下 72 列了。
git format-patch --stdout將一系列提交轉換為一系列電子郵件，並使用提交訊息作為郵件正文。良好的電子郵件禮儀要求我們為純文字郵件添加格式，以便在 80 列的終端機中留出空間，容納幾層嵌套的回覆指示符而不會溢出。 （目前的 rails.git 工作流程不包含電子郵件，但未來會怎樣誰也說不準。）
Vim 用戶可以透過安裝我的vim-git 運行時檔案來滿足此要求，或者只需在 git 提交資訊檔案中設定以下選項即可：

:set textwidth=72
對於 Textmate，您可以在「檢視」功能表下調整「換行」選項，然後使用它^Q來重新換行段落（請確保段落後面有一個空白行，以免混入註解）。以下是一個 shell 命令，可以將 72 添加到選單中，這樣您就不必每次都拖曳來選擇了：

$ defaults write com.macromates.textmate OakWrapColumns '( 40, 72, 78 )'
比正文格式的規範更重要的是添加主題行。如範例所示，主題行應控制在 50 個字元左右（但這並非硬性限制），並且務必在主題行後空一行。主題行應簡潔地概括提交所引入的更改；如果存在任何無法在嚴格字數限制內表達的技術細節，請將其放在正文中。主旨行在 Git 中被廣泛使用，如果郵件內容過長，主旨行通常會被截斷。以下是一些主題行最終出現位置的範例：

git log --pretty=oneline顯示一個簡要的歷史記錄映射，其中包含提交 ID 和摘要。
git rebase --interactive提供所調用編輯器中每次提交的摘要
如果設定了該組態選項merge.summary，則所有已合併提交的摘要資訊都將包含在合併提交訊息中。
git shortlog它會在產生的類似變更日誌的輸出中使用摘要行。
git format-patch、git send-email、 及相關工具均將其用作電子郵件的主題。
reflogs，一個本地歷史網站，git reflog旨在幫助您從愚蠢的錯誤中恢復過來，並獲取摘要副本。
gitk包含一個用於匯總的欄位。
GitHub 在其使用者介面中的多個地方都使用了摘要資訊。
主題/正文的差異看似無關緊要，但它是使 Git 歷史記錄比 Subversion 更易於使用的眾多微妙因素之一。


評論功能已關閉。 請透過電子郵件與我聯繫。

SECURITY.md
