# Agent Browser Capability Contract

## Purpose

Define how Design Forge detects and optionally uses an `agent-browser` capability for Preview QA.

## Capability states

```text
unknown
  ↓
checking
  ├── available
  ├── unavailable
  └── blocked
```

`available` means the agent can invoke the browser capability and reach the local preview. It does not merely mean that a binary name exists somewhere on PATH.

## Detection

The host should prefer capability discovery provided by the execution environment. If shell inspection is available, a lightweight executable check may be used as a secondary signal.

Detection must distinguish:

- not installed / unavailable
- installed but not executable
- executable but unable to launch
- launched but unable to reach the preview
- available and usable

Do not claim browser QA from installation alone.

## Permission

Using a browser against a user's local project is an external execution step. Before the first automated interaction run, Design Forge should explicitly ask for permission.

Suggested intent:

> 我检测到环境里可以使用 agent-browser。要不要让我打开刚才生成的 Preview，自动走一遍首页 → 列表 → 详情 → 返回、移动端菜单和关键交互？

The user can decline. Declining does not block manual preview acceptance.

## Runtime flow

```text
Preview generated
      ↓
Detect capability
      ↓
available?
  ├── no → manual QA path
  └── yes
        ↓
request permission
  ├── denied → manual QA path
  └── granted
        ↓
start / reach local preview
        ↓
run representative journeys
        ↓
collect structured failures
        ↓
fix or return QA report
```

## Representative journeys

At minimum, when routes exist:

1. Home → primary index
2. Index → detail
3. Detail → back/home
4. Open/close mobile navigation
5. Exercise a representative filter/tab/disclosure
6. Verify a responsive viewport state when the browser supports it
7. Verify no critical navigation dead ends

The exact journeys should be derived from the accepted route and interaction state definitions rather than invented arbitrarily.

## Failure policy

Browser findings are evidence about the Preview implementation, not permission to change design intent.

- implementation defect → renderer repair
- missing design decision → return to Design Forge
- preference disagreement → user decision
- browser/environment failure → report as infrastructure failure

## No-agent-browser path

If unavailable:

- do not fabricate automated results;
- provide the preview entry point;
- provide a concise manual QA checklist;
- keep the workflow alive until the user accepts or revises the preview.
