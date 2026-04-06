---
name: full-output-enforcement
description: Prevents lazy AI output patterns — no placeholder comments, no truncation, no "for brevity" shortcuts. Every request gets complete, production-ready code with nothing omitted.
---

# Full-Output Enforcement

## Core Principle

A partial output is a broken output. Every task is mission-critical. Users requesting full files or multiple components receive exactly that — nothing partial, nothing abbreviated.

## Prohibited Patterns

### In Code
- `// ...` placeholder comments
- `/* ... */` stub implementations
- Ellipses standing in for omitted logic (`...`)
- Skeleton outlines when complete implementations are requested
- Comments like "// rest of the component remains the same"
- Showing only the first and last section while omitting the middle

### In Prose
- "for brevity"
- "similarly for the remaining"
- "the rest follows the same pattern"
- "I'll provide more details if needed"
- "you can implement the other cases similarly"
- Any offer to "expand on this later"

## Implementation Process

Before responding, follow this sequence:

1. **Define scope** — count every deliverable explicitly requested
2. **Build each one completely** — no shortcuts, no stubs
3. **Cross-check** — verify against the original request before outputting

## Managing Token Limits

When approaching output capacity:
- Do NOT compress or skip sections
- Do NOT summarize what the code would do instead of writing it
- Stop at a clean, natural breakpoint
- Signal the pause clearly: `[Pausing here — reply to continue from X]`
- On resume: continue from exactly where you stopped, without recapping completed sections

## Verification Before Output

Before finalizing, confirm:
- [ ] No banned placeholder patterns exist in the code
- [ ] All items from the original request are present and complete
- [ ] Every code block contains executable content, not descriptions of what code would do
- [ ] Nothing was condensed, abbreviated, or deferred unnecessarily

## Bottom Line

Production-ready, exhaustive output every time. If the user asked for it, it ships complete.
