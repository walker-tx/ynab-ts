# ExistingCategoryGoalFrequency

When specified, configures a recurring 'NEED' target of goal_target that repeats at this frequency, replacing any existing target. Requires goal_target. 'yearly' also requires goal_target_date, the date the target is next due. 'monthly' accepts an optional goal_target_date, and 'weekly' cannot be combined with goal_target_date. Not supported for Credit Card Payment categories or categories paired to a loan account. Omit to leave an existing target's cadence unchanged.

## Example Usage

```typescript
import { ExistingCategoryGoalFrequency } from "ynab-ts/models";

let value: ExistingCategoryGoalFrequency = "yearly";
```

## Values

```typescript
"monthly" | "weekly" | "yearly"
```