<!-- Start SDK Example Usage [usage] -->
```typescript
import { Ynab } from "ynab-ts";

const ynab = new Ynab({
  bearer: process.env["YNAB_BEARER"] ?? "",
});

async function run() {
  const result = await ynab.user.get();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->