# Typography: Readability and Measure

## Principle

Readable typography is a relationship between typeface, size, line-height, line length, contrast, language, and context. There is no single universal "perfect" value.

## Recognition

Reading becomes difficult when:

- lines are excessively long or short for the context
- line-height is too tight for the size and weight
- text hierarchy is unclear
- contrast is insufficient
- text is placed on visually noisy imagery
- mobile layouts preserve desktop measures without adaptation

## Decision model

Consider:

```text
content type
+ typeface metrics
+ viewport width
+ reading distance
+ language/script
+ surrounding density
```

Long-form content usually benefits from a controlled reading measure. Interface labels and navigation can use different measures because they are scanned rather than read continuously.

## User question

Ask:

> "Is this page mainly for reading deeply, or for quickly scanning and finding something?"

This answer can materially change typography choices.

## Action

Treat measure as a design variable, not an afterthought. Define content containers and text roles together.

For responsive work, allow measure and line-height to adapt instead of merely shrinking font size.

## Critique

Review real content, not placeholder lorem ipsum. Check:

- actual line breaks
- paragraph rhythm
- headings wrapping
- links and labels
- multilingual content where relevant
- small-screen behavior
