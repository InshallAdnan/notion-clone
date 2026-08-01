<div align="center">
<h1>Notion Clone | Note-taking Platform</h1>
<img height="240" alt="notion-clone" src="https://github.com/user-attachments/assets/6ad53583-ba1e-464b-bd01-910cbddac75e" />

<p>
All-in-one workspace to write notes, manage tasks, organize projects, and collaborate. <br/>
Portfolio project inspired by the one and only <a href="https://www.notion.com/">https://www.notion.com</a>
</p>
</div>

<br/>

## Description

"You probably have fifteen tabs open: one for email, one for Slack, one for Google Docs, and on, and on... That’s where Notion comes in. We want to break away from today’s tools—and bring back some of the ideas of those early pioneers. As a first step, we are blending much of your workflow into an all-in-one workspace. Want a task list? A product roadmap? A design repository? They are now all in one place. You can even customize your own workspace from dozens of building blocks.Solve your problems your way, bounded only by your imagination."

<br/>

## Tech Stack
- Next.js: Full-stack React framework
- Blocknote/core: Notion-style rich text editor
- Edge Store: File uploads
- NextAuth (Google): Authentication
- Prisma + SQLite: Document data store
- Zustand: State management
- Zod: Type-safe validation

<br/>

## Features
- Notion-style block editor  
- Infinite nested documents  
- Trash bin with soft delete & recovery  
- Upload cover images to Edge Store  
- Customizeble cover image per document
- Custom icons for documents, with real-time updates
- Expandable and collapsible sidebar navigation
- Fully responsive (mobile + desktop)
- Google sign-in with user workspaces
- Publish pages with shareable links

<br/>

## How to run it locally
0. Prerequisites
- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/lang/en/) or `npm`

1. Clone the Repository
```
git clone https://github.com/sofiahernandes/notion-clone.git
cd notion-clone
```

3. Install Dependencies
```
npm install
# or
yarn install
```

4. Set Up Environment Variables (.env)
```
# Edge Store (file upload)
EDGE_STORE_ACCESS_KEY=""
EDGE_STORE_SECRET_KEY=""

# Auth
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET=""

# Database
DATABASE_URL="file:./dev.db"
```

5. Run database migrations
```
npx prisma migrate dev --name init
```

6. Start the Development Server
```
npm run dev
# or
yarn dev
```

<br/>

## License

<a href="https://github.com/sofiahernandes/notion-clone">Notion Clone</a> © 2026 by <a href="https://github.com/sofiahernandes">Sofia Botechia Hernandes</a> is licensed under [MIT](LICENSE).
