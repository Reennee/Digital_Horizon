import OpenAI from "openai";
const openai = new OpenAI({apiKey:'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',dangerouslyAllowBrowser: true});

async function searching(question:string) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Ask any question am willing to help." }, {
          role: "user",
          content: question,
        },],
    model: "gpt-3.5-turbo",
  });

  return({message:completion.choices[0].message.content});
}

export default searching;
