This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```mermaid
graph TD

  subgraph User_Interface
    A[Login Screen]
    B[Dashboard]
    C[Course Page]
    D[Lecture Page]
    E[Quiz Page]
    F[Assignment Page]
    G[Submission Page]
    H[Grade Page]
    I[Progress Page]
    J[Messages]
  end

  subgraph Database_Structure
    a[STUDENT]
    b[INSTRUCTOR]
    c[COURSE]
    d[QUIZ]
    e[ASSIGNMENT]
    f[ENROLLMENT]
    g[QUIZ_RESPONSE]
    h[ASSIGNMENT_SUBMISSION]
    i[PROGRESS]
    j[MESSAGE]
    k[LECTURE]
  end

  A -->|Login| a
  B -->|View Dashboard| a
  B -->|Manage Courses| b
  C -->|View Course Details| c
  C -->|Create Quiz| d
  C -->|Create Assignment| e
  C -->|Enroll Students| f
  D -->|View Lecture| k
  E -->|Take Quiz| g
  F -->|Submit Assignment| h
  G -->|Grade Submissions| h
  I -->|View Progress| i
  J -->|Send Message| j
  J -->|View Messages| j
```
