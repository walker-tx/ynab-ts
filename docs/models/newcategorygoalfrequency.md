# NewCategoryGoalFrequency

When specified, configures a recurring 'NEED' target of goal_target that repeats at this frequency, replacing any existing target. Requires goal_target. Cannot be combined with goal_target_date and is not supported for Credit Card Payment categories. Omit to leave an existing target's cadence unchanged.

## Example Usage

```typescript
import { NewCategoryGoalFrequency } from "ynab-ts/models";

let value: NewCategoryGoalFrequency = "weekly";
```

## Values

```typescript
"monthly" | "weekly" | "yearly"
```