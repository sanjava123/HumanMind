const form = document.querySelector("#prompt-form");
const challenge = document.querySelector("#challenge");
const aiOutput = document.querySelector("#ai-output");
const refreshDraft = document.querySelector("#refresh-draft");
const layerOutput = document.querySelector("#layer-output");
const pledgeButton = document.querySelector("#pledge-button");
const pledgeOutput = document.querySelector("#pledge-output");

const drafts = [
  {
    frame: "A practical AI answer would optimize for speed: identify the repeatable parts, automate the lowest-risk tasks, measure the result, and keep improving the system.",
    human:
      "A human answer asks who experiences the change, what trust might be lost, and where a person should remain visibly accountable.",
  },
  {
    frame: "A model can compare patterns and suggest a clean roadmap: define the goal, break it into milestones, and remove friction from the workflow.",
    human:
      "You add the real-world constraint: team energy, customer emotion, timing, politics, values, and the quiet detail that changes everything.",
  },
  {
    frame: "AI can generate options quickly. It can summarize what usually works and produce a confident first pass.",
    human:
      "Confidence is not the same as responsibility. People are required because someone must choose, explain, listen, and own the outcome.",
  },
];

const layers = {
  context:
    "Context turns a clever answer into a useful one. You know the history, the people, the constraints, and the reason a technically correct solution might still fail.",
  taste:
    "Taste is the ability to notice what feels off before the metric proves it. It is craft, restraint, timing, and the courage to delete the impressive thing.",
  stakes:
    "Stakes make thinking moral. AI can rank options, but humans decide what risk is acceptable and who deserves protection.",
  trust:
    "Trust is built through presence. Users need to feel that someone is listening, improving, and accountable when the system gets it wrong.",
};

const reminders = [
  "I do not need to beat AI at typing. I need to get better at seeing.",
  "My value is judgment under context: the part no model can fully inherit.",
  "I can use AI for momentum and keep responsibility where it belongs: with me.",
  "The future needs builders who understand people, not just tools that produce code.",
];

let lastPrompt = "";

function cleanPrompt(value) {
  return value.trim().replace(/\s+/g, " ");
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function generateDraft(value) {
  const prompt = cleanPrompt(value);
  const draft = pick(drafts);
  const opener = prompt
    ? `For "${prompt}", the machine might say: `
    : "The machine might say: ";

  lastPrompt = prompt;
  aiOutput.textContent = `${opener}${draft.frame} ${draft.human}`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  generateDraft(challenge.value);
});

refreshDraft.addEventListener("click", () => {
  generateDraft(lastPrompt || challenge.value);
});

document.querySelectorAll("[data-layer]").forEach((button) => {
  button.addEventListener("click", () => {
    layerOutput.textContent = layers[button.dataset.layer];
  });
});

pledgeButton.addEventListener("click", () => {
  pledgeOutput.textContent = pick(reminders);
});
