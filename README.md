# 🧠 Code Explainer – AI-Powered JavaScript & React Code Interpreter

**Code Explainer** is an AI-powered tool that helps developers understand JavaScript and React code by generating step-by-step explanations using OpenAI’s GPT-4 model.

It’s designed to demonstrate how prompt engineering can be integrated into real-world developer tools, blending frontend UI with thoughtful LLM prompting strategies.

---

## 🔍 Features

- Paste any JavaScript or React code snippet  
- Click "Explain" to receive a structured AI-generated breakdown  
- Explanation includes:
  - Code summary
  - Step-by-step analysis
  - Potential performance or readability issues  
- Powered by GPT-4 API  
- Built with React + Vite + TailwindCSS  
- Easily deployable to [Vercel](https://vercel.com)

---

## 🧠 Prompt Engineering Highlights

- Uses a *System Prompt* to define GPT’s role as a senior JS tutor
- Dynamically injects user code into the prompt
- Temperature set to 0.4 for consistent and focused output
- Chain-of-thought explanation support coming soon

### Example Prompt:

```
You are a senior JavaScript tutor helping explain code step by step.

Please explain the following code in simple terms:

{{user_pasted_code}}
```

---

## 🚀 Tech Stack

- React (with Vite)
- TailwindCSS
- OpenAI API (GPT-4)
- Vercel (for deployment)

---

## 💻 Local Development

```bash
git clone https://github.com/your-username/code-explainer-ai.git
cd code-explainer-ai
npm install
```

Create a `.env` file and add your OpenAI API key:

```env
VITE_OPENAI_API_KEY=your_openai_api_key
```

Start the app:

```bash
npm run dev
```

---

## 🌐 Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import this GitHub project
3. Add an environment variable:
   - `VITE_OPENAI_API_KEY=your_api_key`
4. Deploy and share your hosted tool!

---

## ✨ Live Demo

> _Coming soon_ – or deploy it yourself with one click on Vercel.

---

## 📌 Future Improvements

- Support for multiple explanation modes (basic vs. chain-of-thought)
- Syntax highlighting of code
- Markdown formatting of AI output
- Copy-to-clipboard / export explanation