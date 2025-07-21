// Code Explainer - React + JavaScript + Vite Project Scaffold

import { useState } from "react"

export default function CodeExplainer() {
  const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY
  const [code, setCode] = useState("")
  const [explanation, setExplanation] = useState("")
  const [loading, setLoading] = useState(false)

  const handleExplain = async () => {
    setLoading(true)
    setExplanation("")
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: "You are a senior JavaScript tutor helping explain code step by step.",
            },
            {
              role: "user",
              content: `Please explain the following code in simple terms:\n\n${code}`,
            },
          ],
          temperature: 0.4,
        }),
      })

      const data = await res.json()
      const result = data.choices?.[0]?.message?.content || "No response"
      setExplanation(result)
    } catch (err) {
      setExplanation("Error: " + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-4">🧠 Code Explainer</h1>
      <textarea
        className="w-full h-40 p-2 border rounded mb-4"
        placeholder="Paste your JavaScript or React code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleExplain}
        disabled={loading || !code.trim()}
      >
        {loading ? "Explaining..." : "Explain Code"}
      </button>
      {explanation && (
        <div className="mt-6 whitespace-pre-wrap bg-gray-100 p-4 rounded">
          {explanation}
        </div>
      )}
    </div>
  )
}
