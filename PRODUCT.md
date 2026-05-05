# Composable — Product Context Brief

Use this document to give Claude (or any AI) full context on what Composable is, what we're building, and how to talk about it. Include it at the start of any prompt where you need accurate product framing.

---

## What Composable Is

Composable is **AI infrastructure for compensation**. We build the intelligence layer that sits on top of a company's existing HR stack and tells them what every employee should be paid — and when.

The tagline: **Just-in-time compensation intelligence.**

We are not an HRIS. We are not a benchmarking tool. We are not a flexible benefits platform (that was our previous positioning — don't revert to it). We are the engine that turns compensation from a calendar event into a continuous, data-driven process.

---

## The Problem We Solve

Annual merit cycles are a retention liability. Three specific failures:

1. **Stale by design.** Six weeks of prep for a process already 14 months out of date when it opens.
2. **Uniform where it shouldn't be.** A 4% pool distributed uniformly — overpaying half the team and underpaying the other.
3. **Too slow to retain.** The employees you needed to keep didn't wait for your next cycle date.

The current state: blank spreadsheets, stale survey data, calibration meetings built on arguments rather than data, exception requests flooding HR inboxes, and manual HRIS entry after every approval.

---

## Two Products

### Product 1: AI Merit Cycles (the wedge)

**Positioning:** Replace the blank spreadsheet before the cycle starts.

Before a merit cycle opens, Composable generates a complete, manager-ready compensation recommendation for every employee — grounded in performance data, market benchmarks, internal equity, retention risk, and the available budget. Managers review, adjust, and approve instead of building from scratch.

**Key outcomes:**
- 6 weeks of cycle prep compressed to a weekend
- Every recommendation within policy guardrails before a manager sees it
- Real-time budget impact, equity gap detection, and outlier flags visible throughout
- ~30 hours per manager per cycle eliminated
- ~$300K labor savings per cycle at 1,000 employees (from eliminating manual prep)

**Go-to-market note:** This is the starting point for every customer. You cannot use the Compensation Agent without first running an AI Merit Cycle — the agent needs to learn the company's pay philosophy and people patterns from a full cycle.

---

### Product 2: Compensation Agent (the category play)

**Positioning:** The right raise, for the right person, at the right time.

Once a company has run one AI-assisted cycle, we flip them to continuous. The agent monitors every employee — performance trends, retention signals, market shifts — and surfaces individual raise recommendations at the moment they should happen. Not a pool. Not an annual date. Individual, justified, just-in-time.

**Key outcomes:**
- ~2% total payroll savings annually vs uniform annual cycles
- ~$2.5M+ annual recurring savings for a 1,000-person tech company (2% of ~$125M payroll)
- Eliminates retention losses from comp decisions that came three months too late
- Full timing rationale with every recommendation
- Syncs to HRIS and payroll on approval — no manual entry

**The ~2% explanation:** This comes from precision. The annual cycle overpays people who didn't need a raise yet and underpays people who needed one months ago. Just-in-time raises right-size both: the unnecessary raises don't happen, and the critical retentions happen before the employee is already out the door.

---

### Supporting Product: Flexible Compensation

**Do not lead with this.** Flexible comp (employee self-allocation across salary, equity, RRSP/401(k), benefits) is a real product we built — it was the original Composable. It has its own product page and pricing tier. But it is not the pitch.

Flexible comp is what we offer as an add-on or standalone for companies that want to give employees choice in how their total comp is structured. Mention it when relevant (especially for companies post-Series B that are building a talent brand). Never open with it.

---

## The Product Relationship

```
AI Merit Cycles  →  Compensation Agent  →  [optional] Flexible Comp
    (wedge)             (category)              (add-on)
```

Every customer starts with AI Merit Cycles. After one full cycle, they unlock the Compensation Agent. Flexible Comp is available standalone or layered on top.

---

## Buyer Personas

### Total Rewards Leaders (primary)
Running comp strategy for hundreds or thousands of employees, often alone or with a small team. Drowning in spreadsheets, stale data, and cycle prep. They want the first draft — not a blank cell. They talk about: prep time, calibration quality, exception management, cycle timelines.

### CHROs / Chief People Officers
Board-facing. They want comp to be a retention engine, not a fire-fighting exercise. They want a business case with numbers (payroll savings, attrition reduction). They talk about: attrition, talent strategy, board reporting, tech-forward positioning.

### HR Operations
They own the process. They care about guardrails, audit trails, HRIS sync, no manual work. They want the exception request inbox to go quiet. They talk about: workflow automation, compliance, HRIS integration, manager experience.

### Finance / FP&A
They want budget certainty. No end-of-cycle surprises. Real-time visibility into payroll impact before approvals happen. They talk about: budget pacing, payroll variance, cost modeling, GL structure.

---

## Key Numbers (use these consistently)

| Metric | Source | Notes |
|--------|--------|-------|
| ~30 hrs | Per manager per cycle eliminated | From manual recommendation-building |
| ~$300K | Labor savings per merit cycle | At 1,000 employees — Product 1 |
| ~2% | Total payroll savings annually | Product 2 (Compensation Agent) |
| ~$2.5M+ | Annual recurring savings | 2% of payroll at 1,000 employees — Product 2 |
| 6 weeks → 1 weekend | Cycle prep reduction | Product 1 |
| 80+ | HRIS & payroll integrations | Workday, Rippling, BambooHR, ADP, UKG, SAP, Ceridian, Paylocity, Gusto, Paychex |

All metrics are from customer discovery and early design partner data. Label them as such where appropriate.

---

## Technical Context

- Composable is a **layer on top of existing HR stacks** — it does not replace the HRIS
- Bidirectional sync: reads employee data, performance data, comp history → writes approved recommendations back to HRIS and payroll automatically
- 80+ integrations including all major HRIS and payroll platforms
- CRA and IRS compliant (Canadian and US payroll mechanics built-in)
- SOC 2 Type II available at Enterprise tier
- Full audit trail on every recommendation, edit, and approval

---

## Tone and Copy Rules

**Do:** Declarative statements of fact. Specific numbers. Short sentences. Product-led language.

**Don't:**
- Sales-pitch imperative language ("Stop losing top performers to...")
- Vague claims without specifics ("world-class", "enterprise-grade", "robust")
- Paragraph-length explanations where a bullet does the job
- Abbreviations: write "HR Operations" not "HR Ops", "People Operations" not "People Ops"
- Trailing periods on short eyebrow labels or section headings

**Voice:** Direct, builder-to-builder. Name the specific outcome. Assume the reader is smart and time-poor.

---

## Current Status

- Early-stage, accepting design partners in US and Canada
- Design partner program: bi-weekly calls with founding team, direct roadmap input, early feature access, preferred pricing locked before public launch
- Contact/apply: `/contact` page on getcomposable.com

---

## What We Are Not

- Not an HRIS
- Not a benchmarking service (we use market data, but we give recommendations, not data)
- Not a flexible benefits platform (that was the old pitch)
- Not a performance management tool (we consume performance data, we don't generate it)
- Not a one-size-fits-all merit pool system (we replace that)
