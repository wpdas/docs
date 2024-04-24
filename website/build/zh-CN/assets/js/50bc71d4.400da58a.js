"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6406],{32885:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"reorganizing-docs","metadata":{"permalink":"/zh-CN/blog/reorganizing-docs","source":"@site/../blog/2024-04-24.md","title":"Reorganizing our docs","description":"We released a mayor reorganization of our repository, so we can improve docs for everyone... including us","date":"2024-04-24T00:00:00.000Z","tags":[{"label":"docusaurus","permalink":"/zh-CN/blog/tags/docusaurus"},{"label":"updates","permalink":"/zh-CN/blog/tags/updates"}],"readingTime":3.345,"hasTruncateMarker":true,"authors":[{"name":"Guille","title":"Docs Maintainer","url":"https://github.com/gagdiez","imageURL":"https://github.com/gagdiez.png","key":"gagdiez"}],"frontMatter":{"title":"Reorganizing our docs","authors":["gagdiez"],"slug":"reorganizing-docs","tags":["docusaurus","updates"],"hide_table_of_contents":true},"unlisted":false,"nextItem":{"title":"We have a blog now!","permalink":"/zh-CN/blog/we-have-a-blog"}},"content":"*We released a mayor reorganization of our repository, so we can improve docs for everyone... including us*\\n\\n<p><img src=\\"https://img.freepik.com/free-photo/ancient-books-adorn-library-carefully-arranged-with-classics-rare-gems_157027-2332.jpg\\" /></p>\\n\\n\x3c!-- truncate --\x3e\\n\\n## Organic growth\\nOur documentation is the result of multiple people collaborating across the span of four very active years, and it has seen a lot of changes: [2942 commits and counting](https://github.com/near/docs/commits/master/).\\n\\nIn the beginning, our docs only needed to explain how to create [smart contracts](/build/smart-contracts/what-is), and how to [interact with them through a frontend](/build/web3-apps/quickstart). Fast forward to today, and we have more than 200 pages of documentation, covering topics such as [chain abstraction](/build/chain-abstraction/what-is), [on-chain components](/build/near-components/what-is), [data infrastructure](/build/data-infrastructure/what-is), and [primitives such as NFT, FT](/build/primitives/what-is).\\n\\nThe best thing is that new features are released every single month. However, all progress comes at a cost, and as our ecosystem grew, so did the disorganization of our documentation.\\n\\n## What link was that again?\\nLet\'s briefly explain how [docusaurus](https://docusaurus.io/) (the framework we use in our docs) works so you can understand the problem.\\n\\nIn docusaurus, all the pages are written as simple markdown files. These files go inside the `./docs` folder, and can be organized in folders. Each file has a unique ID on its header that identifies it (e.g. `id: what-is`), and this ID, alongside its folder path, is used to generate the URL. \\n\\n> For example, the document [`docs/build/smart-contracts/what-is.md`](https://github.com/near/docs/blob/master/docs/2.build/2.smart-contracts/what-is.md) has the `id: what-is`, so it ends ends being served in the URL https://docs.near.org/build/smart-contracts/what-is.\\n\\n### The problem\\n\\nAbout a year ago, we noticed that our organic growth had left us with a very inconsistent URL structure. Basically, we had a lot of folders, and the files related to the same topic (e.g. NEAR components) would be all over the place.\\n\\nFor example, you would be in the \\"Build\\" section reading about \\"What is a NEAR Component?\\" and the URL was `/bos/tutorial/quickstart`. The next page was \\"Setup an Environment\\" located at `/bos/dev/intro`, followed by \\"Anatomy of a Component -> State\\" at `/bos/api/state`. Talk about consistency!\\n\\nOf course, we did not do this on purpose, it is just how things evolved. You might even notice that we are now talking about \\"NEAR Components\\" but the URL talks about \\"BOS\\". This is because when we started, \\"BOS\\" (Blockchain Operating System) felt like a good name, but community feedback made us know that, indeed, it was not. \\n\\n### The migration\\n\\nWe [re-organized more than 200 files](https://github.com/near/docs/pull/1890/files) to a new structure that is more consistent. This makes it easier for users to remember the URLs, improves our SEO, and makes it easier for contributors to find where to add new content. No more need to search across multiple folders trying to find the right file!\\n\\nIn the process, we updated all **internal links**, aided by our [link-checker script](https://github.com/near/docs/blob/master/website/test-links.sh) to make sure we left **no broken links**. We also added **URL redirects** in our server, so all users coming from an external site are redirected to the correct URLs.\\n\\nBesides checking broken links, we took the time to make sure all the **translations were correctly migrated**. The system Docusaurus uses (called [Crowdin](https://crowdin.com/)) is not very good at detecting changes in a file, so migrating all the translations was a huge effort in itself. \\n\\nWe could write a blog post just about migrating translations in docusaurus + crowdin... but we will spare you the pain.\\n\\n:::tip Missing URL\\nIf you come across a URL that is not working, please let us know by using the `Feedback` button on the right side of the page, or by opening an [issue in our repository](https://github.com/near/docs/issues)\\n:::\\n\\n## What\'s next\\nNow that most of our documentation is in a better shape, we can focus on improving the content itself. We have a lot of ideas on how to make the docs more interactive, and we are excited to start working on them.\\n\\nStay tuned for more updates, and remember that if you have any feedback or ideas, you can always reach out to us. We are always happy to hear from you!\\n\\nSee you in the next post! \ud83d\ude80"},{"id":"we-have-a-blog","metadata":{"permalink":"/zh-CN/blog/we-have-a-blog","source":"@site/../blog/2024-04-23.md","title":"We have a blog now!","description":"Check check check. Is this thing on? Hello, world!","date":"2024-04-23T00:00:00.000Z","tags":[{"label":"updates","permalink":"/zh-CN/blog/tags/updates"}],"readingTime":2.105,"hasTruncateMarker":true,"authors":[{"name":"Guille","title":"Docs Maintainer","url":"https://github.com/gagdiez","imageURL":"https://github.com/gagdiez.png","key":"gagdiez"}],"frontMatter":{"title":"We have a blog now!","authors":["gagdiez"],"slug":"we-have-a-blog","tags":["updates"]},"unlisted":false,"prevItem":{"title":"Reorganizing our docs","permalink":"/zh-CN/blog/reorganizing-docs"}},"content":"*Check check check. Is this thing on? Hello, world!*\\n\\n<p><img src=\\"/assets/images/protocol-b73c2a3ace3307226ee7eb2149ee432f.png\\" /></p>\\n\\n\x3c!-- truncate --\x3e\\n\\n## Hello there!\\nWelcome to the new NEAR documentation blog! We\'re excited to inaugurate this new space where we can share news and updates. We know what you are thinking \u2014 why a blog? Well, it allows us to interact with you in a different way!\\n\\nWhen writing documentation, it is important for us to keep the content focused and concise. This way, when you read it, you have nothing to distract you, and you can focus on learning a new concept.\\n\\nThe problem with this is that many times, we want to share ideas, thoughts, or insights into why some things are the way they are. However, this would imply going off on a tangent and explaining why some decisions were made, which will probably add noise to the document. Most of the time, users just want a link to an example or working code. Also, people don\'t like to read long texts.\\n\\nBesides that, sometimes we just want to share what we did during the week. For example, did you notice that we fixed the nightmare that was the URL structure, or that we added new landing pages for all concepts? We want to share these things with you, but they don\'t really belong in the Docs.\\n\\n:::tip\\nYou would not believe the number of times we said during a review _\\"let\'s remove that, we are writing technical documentation, not a blog post\\"_ ... well, now we can make the blog post!\\n:::\\n\\n## What to expect\\n\\nWe will be using this space to share updates about our docs, as well as **complement them** with additional information that we think you\'ll find interesting.\\n\\nOur aim is to keep the blog updated at least once a week, but given the limited amount of time we have, we will see how that goes.\\n\\nMoreover, we want to remind you that our Docs are an open source and **collaborative project**. If you feel like you have something to share, or want to contribute to the blog, feel free to reach out. And by reaching out, we mean [opening a PR](https://github.com/near/docs/pulls)!\\n\\n## A new era for NEAR docs\\n\\nWe are super excited to start this new section and hope it helps us to connect with all of you in a better way. We are looking forward to hearing your thoughts and feedback, and hope you enjoy the content we\'ll be sharing.\\n\\nSee you in the next post! \ud83d\ude80"}]}')}}]);