# UI Flow Specifications - New Business

This folder contains structured JSON specifications generated from the UI flow documentation in the `new_business/` folder using the **multimodal-ui-flow-analyzer** agent skill.

## Generated Specifications

| Source File | Spec File | Steps | Complexity | Description |
|-------------|-----------|-------|------------|-------------|
| `issue_smsf_ordinary_backdated.md` | `issue_smsf_ordinary_backdated-spec.json` | 8 | Medium | Issue plan with backdated RCD |
| `issue_smsf_ordinary_linked.md` | `issue_smsf_ordinary_linked-spec.json` | 23 | High | Issue both Ordinary and SMSF linked plans |
| `process_standard_rates_application.md` | `process_standard_rates_application-spec.json` | 70 | Very High | Full validation and issuance workflow |
| `request_rollover_super_linked_issue_both.md` | `request_rollover_super_linked_issue_both-spec.json` | 67 | Very High | Rollover request and dual plan issuance |

## Specification Structure

Each JSON spec follows this structure:

```json
{
  "flow_id": "unique_identifier",
  "metadata": {
    "app": "Application name",
    "flow_type": "Type of flow",
    "goal": "What this flow accomplishes",
    "total_steps": 0,
    "complexity": "low|medium|high|very_high"
  },
  "prerequisites": ["Required conditions before starting"],
  "phases": [
    {
      "phase_id": "phase-1",
      "name": "Phase Name",
      "description": "What this phase does"
    }
  ],
  "steps": [
    {
      "step_id": "step-1",
      "intent": "What user wants to accomplish",
      "action": "click|type|select|verify|navigate|sequence",
      "ui_element": {
        "type": "button|input|link|tab|etc",
        "label": "Element label",
        "identification_strategy": ["Selector strategies"]
      },
      "precondition": "Required state",
      "resulting_state": "Expected outcome"
    }
  ],
  "postconditions": ["Final state after flow completion"],
  "automation_notes": {
    "critical_validations": [],
    "wait_conditions": [],
    "reusable_sequences": []
  },
  "edge_cases": []
}
```

## Common Patterns Identified

### Reusable Sequences

1. **issue_plan**
   - Click Benefits tab
   - Click Issue button
   - Set date (if applicable)
   - Select benefits
   - Verify premiums
   - Click Issue (final)

2. **close_task**
   - Click on task
   - Select "Completed" status
   - Click Save

3. **verify_payment_details**
   - Navigate to Periodic Debits section
   - Verify payment details present

### Common UI Elements

| Element | Identification Strategy |
|---------|------------------------|
| Benefits Tab | `role=tab with name='Benefits'` |
| Diary & Workflow Tab | `role=tab with name='Diary & Workflow'` |
| Issue Button | `role=button with name='Issue'` |
| Save Button | `role=button with name='Save'` |
| Close Button (X) | `role=button with aria-label='Close'` |
| Plan Number Link | `role=link containing plan number` |
| Status Dropdown | `role=combobox with label='Status'` |

### Async Wait Points

Several flows have async wait points where external events must occur:

| Flow | Wait Point | Typical Duration |
|------|------------|------------------|
| `process_standard_rates_application` | Await inforce confirmation | 1-2 weeks |
| `request_rollover_super_linked_issue_both` | Await rollover response | 2-3 days |

## Usage with Automation Frameworks

### Playwright Example

```typescript
import { test, expect } from '@playwright/test';
import spec from './issue_smsf_ordinary_backdated-spec.json';

test(spec.metadata.goal, async ({ page }) => {
  // Navigate to app
  await page.goto('https://r11uat3.neoslife.com.au/');
  
  // Execute steps
  for (const step of spec.steps) {
    if (step.action === 'click') {
      await page.getByRole(step.ui_element.type, { 
        name: step.ui_element.label 
      }).click();
    }
    // ... handle other action types
  }
  
  // Verify postconditions
  for (const condition of spec.postconditions) {
    // Assert condition is met
  }
});
```

### Cypress Example

```javascript
import spec from './issue_smsf_ordinary_backdated-spec.json';

describe(spec.flow_id, () => {
  it(spec.metadata.goal, () => {
    cy.visit('https://r11uat3.neoslife.com.au/');
    
    spec.steps.forEach(step => {
      if (step.action === 'click') {
        cy.contains(step.ui_element.label).click();
      }
      // ... handle other action types
    });
  });
});
```

## Validation Checklist

Before using these specs for automation:

- [ ] Verify app URL is correct for target environment
- [ ] Confirm UI element labels match current application
- [ ] Test selector strategies against live application
- [ ] Validate business rules are still applicable
- [ ] Check for any UI changes since spec generation

## Regenerating Specs

To regenerate specifications, use the multimodal-ui-flow-analyzer skill:

```
Using the multimodal-ui-flow-analyzer skill, analyze the UI flow in 
new_business/[filename].md and generate a structured specification.
```

---

*Generated using the multimodal-ui-flow-analyzer agent skill*
