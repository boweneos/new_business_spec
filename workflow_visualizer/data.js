const workflowData = [
  {
    "flow_id": "issue_smsf_ordinary_backdated",
    "metadata": {
      "app": "Insurance/Policy Management System",
      "flow_type": "Static UI Interaction",
      "source": "Scribe Export",
      "original_title": "How to Issue a SMSF or Ordinary Plan with Risk Commencement Date Backdated",
      "goal": "Issue a plan with a backdated Risk Commencement Date (RCD) and ensure premium accuracy",
      "total_steps": 8,
      "estimated_duration": "5-10 minutes",
      "complexity": "medium"
    },
    "prerequisites": [
      "User is authenticated in the Insurance/Policy Management System",
      "Plan exists in Proposal status",
      "Request to backdate RCD has been received and documented"
    ],
    "steps": [
      {
        "step_id": "step-1",
        "intent": "Acknowledge the request to issue plans with backdated RCD",
        "action": "verify",
        "ui_element": {
          "type": "text",
          "label": "Request confirmation message or document",
          "visual_location": "Main content area / Communication panel",
          "identification_strategy": [
            "Look for confirmation text containing 'backdate' or 'RCD'",
            "Check diary/notes section for request documentation"
          ]
        },
        "precondition": "Confirmation request exists in system",
        "resulting_state": "User has verified the backdating request is valid",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-23/c6831fd1-c0ab-4ec8-8659-a5c5e6534351/user_cropped_screenshot_fc48951d4d5c4693b194d96d251f080b_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-2",
        "intent": "Verify the specific backdating instructions in the diary note",
        "action": "click",
        "ui_element": {
          "type": "button",
          "label": "Open Diary Note",
          "visual_location": "Diary/Notes section",
          "identification_strategy": [
            "role=button with text containing 'Diary' or 'Note'",
            "Click on diary entry row",
            "Look for expandable note item"
          ]
        },
        "precondition": "Diary note with backdating instructions exists",
        "resulting_state": "Diary note is open and visible with specific date requested",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-23/bf24fdba-e918-4f3c-bfd5-b2690d46917d/user_cropped_screenshot_404848b8f98e486a8ba89ed57d8b1cb1_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-3",
        "intent": "Close the diary note after verification",
        "action": "click",
        "ui_element": {
          "type": "button",
          "label": "X",
          "visual_location": "Dialog/Note header - top right corner",
          "identification_strategy": [
            "role=button with aria-label='Close'",
            "Button with text 'X' or '\u00d7'",
            "[data-testid='close-dialog']"
          ]
        },
        "precondition": "Diary note dialog is open",
        "resulting_state": "Diary note dialog is closed",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-23/a1946bef-bbcd-46dc-9546-464177cb65ff/user_cropped_screenshot_66f2cae6ac704d64ba5bb195b5ebd671_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-4",
        "intent": "Navigate to the Issue action within the Benefits tab",
        "action": "sequence",
        "sub_steps": [
          {
            "action": "click",
            "ui_element": {
              "type": "tab",
              "label": "Benefits",
              "visual_location": "Tab navigation bar",
              "identification_strategy": [
                "role=tab with name='Benefits'",
                "[data-testid='benefits-tab']"
              ]
            }
          },
          {
            "action": "click",
            "ui_element": {
              "type": "button",
              "label": "Issue",
              "visual_location": "Benefits panel action area",
              "identification_strategy": [
                "role=button with name='Issue'",
                "Button containing text 'Issue'"
              ]
            }
          }
        ],
        "precondition": "User is on the plan detail page",
        "resulting_state": "Issue dialog/panel is displayed",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-23/148e51b1-8302-4ea3-adc6-a9f72bfa5217/user_cropped_screenshot_fd95a57227a941fdb92fcf64af511d39_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-5",
        "intent": "Input the backdated Risk Commencement Date",
        "action": "sequence",
        "sub_steps": [
          {
            "action": "type",
            "ui_element": {
              "type": "input",
              "label": "RCD Date Field",
              "visual_location": "Issue dialog - date input area",
              "identification_strategy": [
                "role=textbox with label containing 'Date' or 'RCD'",
                "input[type='date']",
                "[data-testid='rcd-date-input']"
              ]
            },
            "input_value": "[Requested Backdated Date]"
          },
          {
            "action": "click",
            "ui_element": {
              "type": "button",
              "label": "OK",
              "visual_location": "Issue dialog - footer",
              "identification_strategy": [
                "role=button with name='OK'",
                "Button with text 'OK' in dialog"
              ]
            }
          }
        ],
        "precondition": "Issue dialog is displayed",
        "resulting_state": "RCD is set to the backdated value",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/012d1a12-4fb8-4070-91ed-01d50fa9218a/ascreenshot_c861515bf35343528d9257af7bee6d38_text_export.jpeg",
        "confidence": "high",
        "notes": "Date format must match system expectation (e.g., DD/MM/YYYY)"
      },
      {
        "step_id": "step-6",
        "intent": "Select the applicable benefits for the plan",
        "action": "select",
        "ui_element": {
          "type": "checkbox",
          "label": "All benefits",
          "visual_location": "Benefits selection panel",
          "identification_strategy": [
            "role=checkbox for each benefit",
            "Select all checkbox if available",
            "[data-testid='benefit-checkbox']"
          ]
        },
        "precondition": "Benefits selection panel is displayed",
        "resulting_state": "All benefits are selected for issuance",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-23/ab1ec1e1-a24d-4484-8b1f-b318fff77c13/user_cropped_screenshot_e5999bb18fb14375a9d5e4bcdd9bd0ed_text_export.jpeg",
        "confidence": "high",
        "notes": "All benefits on a plan must have the same RCD"
      },
      {
        "step_id": "step-7",
        "intent": "Verify premiums and finalize issuance",
        "action": "sequence",
        "sub_steps": [
          {
            "action": "verify",
            "ui_element": {
              "type": "text",
              "label": "Premium Amounts",
              "visual_location": "Issue summary panel",
              "identification_strategy": [
                "Text containing 'Premium'",
                "Numeric values in premium column"
              ]
            },
            "verification": "Premiums before and after backdating are correct"
          },
          {
            "action": "click",
            "ui_element": {
              "type": "button",
              "label": "Issue",
              "visual_location": "Issue panel - footer/action area",
              "identification_strategy": [
                "role=button with name='Issue'",
                "Primary action button in issue panel"
              ]
            }
          }
        ],
        "precondition": "Benefits are selected and premiums are displayed",
        "resulting_state": "Plan issuance is initiated",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-23/fb77b5c3-a0c1-4d0d-b2d5-8c3323d9c8fa/user_cropped_screenshot_512544518c42404f8c97faf726356e99_text_export.jpeg",
        "confidence": "high",
        "notes": "This is the final commit action - verify premiums match before clicking"
      },
      {
        "step_id": "step-8",
        "intent": "Confirm the plan status update",
        "action": "verify",
        "ui_element": {
          "type": "text",
          "label": "Plan Status",
          "visual_location": "Plan header/status area",
          "identification_strategy": [
            "Text containing 'In Force' or 'In force'",
            "Status badge or indicator",
            "[data-testid='plan-status']"
          ]
        },
        "precondition": "Issue action has completed",
        "resulting_state": "Plan status changed from 'Proposal' to 'In Force'",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-23/bd5b6c0e-76a7-49f4-9554-75b0d80ec88c/user_cropped_screenshot_d682aabf545f43759b9f30afb2657d07_text_export.jpeg",
        "confidence": "high"
      }
    ],
    "postconditions": [
      "Plan Status: 'In Force'",
      "Policy Issue Date: Set to the requested backdated date",
      "Periodic debits: System has set up required debits to bring plan paid up to date"
    ],
    "automation_notes": {
      "critical_validations": [
        "Ensure RCD date format matches system expectation (e.g., DD/MM/YYYY)",
        "Verify premiums match expected values before final Issue click"
      ],
      "wait_conditions": [
        "Wait for Benefits tab to load before clicking Issue",
        "Wait for Issue dialog to appear after clicking Issue button",
        "Wait for status change confirmation after final Issue"
      ],
      "selector_recommendations": {
        "preferred": [
          "role=button with accessible name",
          "role=tab with name",
          "data-testid attributes"
        ],
        "avoid": [
          "CSS class-based selectors",
          "Positional selectors (nth-child)"
        ]
      }
    },
    "edge_cases": [
      {
        "scenario": "Date format mismatch",
        "handling": "Ensure date picker or input accepts the system's expected format"
      },
      {
        "scenario": "Premium calculation discrepancy",
        "handling": "Do not proceed if premiums don't match expected values - escalate for review"
      },
      {
        "scenario": "Benefits already issued",
        "handling": "Check if any benefits are already in force before attempting to issue"
      }
    ]
  },
  {
    "flow_id": "issue_smsf_ordinary_linked",
    "metadata": {
      "app": "Neos Life",
      "app_url": "https://r11uat3.neoslife.com.au/",
      "flow_type": "End-to-End Issue Process",
      "source": "Scribe Export",
      "original_title": "How to Issue a SMSF and Ordinary Linked Plan",
      "goal": "Issue both Ordinary and SMSF linked plans after acceptance",
      "total_steps": 23,
      "estimated_duration": "15-20 minutes",
      "complexity": "high"
    },
    "prerequisites": [
      "User is authenticated in Neos Life system",
      "Both Ordinary and SMSF linked plans exist in Proposal status",
      "Acceptance and confirmation to proceed has been received",
      "Payment details are present in the system"
    ],
    "phases": [
      {
        "phase_id": "phase-1",
        "name": "Access and Verification",
        "description": "Navigate to the plan and verify confirmation received"
      },
      {
        "phase_id": "phase-2",
        "name": "Issue Ordinary Plan",
        "description": "Issue the first (Ordinary) plan"
      },
      {
        "phase_id": "phase-3",
        "name": "Close Ordinary Tasks",
        "description": "Complete workflow tasks for Ordinary plan"
      },
      {
        "phase_id": "phase-4",
        "name": "Issue SMSF Plan",
        "description": "Issue the linked SMSF plan"
      },
      {
        "phase_id": "phase-5",
        "name": "Close SMSF Tasks",
        "description": "Complete workflow tasks for SMSF plan"
      }
    ],
    "steps": [
      {
        "step_id": "step-1",
        "phase": "phase-1",
        "intent": "Access the Neos Life application",
        "action": "navigate",
        "ui_element": {
          "type": "url",
          "label": "Neos Life Application",
          "url": "https://r11uat3.neoslife.com.au/"
        },
        "precondition": "User has valid credentials",
        "resulting_state": "Application home page is displayed",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/f1e20087-60ce-4d24-b121-016d3ea7e227/File_d2f614bb74ea42a7959f125cf86175cb_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-2",
        "phase": "phase-1",
        "intent": "Open the target plan",
        "action": "click",
        "ui_element": {
          "type": "link",
          "label": "Plan Number",
          "visual_location": "Plan list / Search results",
          "identification_strategy": [
            "role=link containing plan number",
            "Clickable text with plan ID format",
            "[data-testid='plan-number-link']"
          ]
        },
        "precondition": "Plan is visible in list or search results",
        "resulting_state": "Plan detail page is displayed",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/4af75c95-8314-4c4e-9461-50b7c95c5071/File_7b844f7196fb4afbb9398d38b8fec58c_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-3",
        "phase": "phase-1",
        "intent": "Access the workflow tasks",
        "action": "click",
        "ui_element": {
          "type": "tab",
          "label": "Diary & Workflow",
          "visual_location": "Tab navigation bar",
          "identification_strategy": [
            "role=tab with name='Diary & Workflow'",
            "Tab containing text 'Diary'",
            "[data-testid='diary-workflow-tab']"
          ]
        },
        "precondition": "Plan detail page is displayed",
        "resulting_state": "Diary & Workflow panel is visible",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/06282164-abf8-4470-82cf-12de8fc58e75/File_8f590fe97eea43fa9cf399f33d78d17d_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-4",
        "phase": "phase-1",
        "intent": "Verify that the confirmation to inforce plan has been received",
        "action": "verify",
        "ui_element": {
          "type": "text",
          "label": "Confirmation received to inforce plan",
          "visual_location": "Task List",
          "identification_strategy": [
            "Text containing 'Confirmation received'",
            "Task item with 'inforce plan' text"
          ]
        },
        "precondition": "Payment details must be present",
        "resulting_state": "Confirmation task is visible and verified",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/eeb93fbb-4cca-4d48-93d5-339a94bdc9a7/File_42d7f981909345f7b071f3ea496b2ae1_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-5",
        "phase": "phase-2",
        "intent": "Navigate to plan benefits",
        "action": "click",
        "ui_element": {
          "type": "tab",
          "label": "Benefits",
          "visual_location": "Tab navigation bar",
          "identification_strategy": [
            "role=tab with name='Benefits'",
            "[data-testid='benefits-tab']"
          ]
        },
        "precondition": "Plan detail page is displayed",
        "resulting_state": "Benefits panel is visible",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/230dd268-f76f-407e-b060-03905cb2700c/File_668c06178acb4a91a7d229f86afc49f1_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-6",
        "phase": "phase-2",
        "intent": "View details for the life insured",
        "action": "click",
        "ui_element": {
          "type": "link",
          "label": "Life Insured Name/Row",
          "visual_location": "Benefits list",
          "identification_strategy": [
            "role=row or role=link with life insured name",
            "Clickable row in benefits table"
          ]
        },
        "precondition": "Benefits panel is visible",
        "resulting_state": "Life insured benefits are expanded/visible",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/12ce49c1-c3c7-4be3-b065-0c333156b990/File_416ab988c379403e95ed048c6751e4e1_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-7",
        "phase": "phase-2",
        "intent": "Initiate the issue process for the first plan",
        "action": "click",
        "ui_element": {
          "type": "button",
          "label": "Issue",
          "visual_location": "Benefits panel action area",
          "identification_strategy": [
            "role=button with name='Issue'",
            "Primary action button in benefits section"
          ]
        },
        "precondition": "Life insured benefits are visible",
        "resulting_state": "Issue dialog is displayed",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/84a36a1c-e89d-454e-943b-235d9c90b8aa/File_e780c0800a6f4842b0e201a4a81c05f3_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-8",
        "phase": "phase-2",
        "intent": "Set or verify the Risk Commencement Date (RCD)",
        "action": "type",
        "ui_element": {
          "type": "input",
          "label": "Issue Date/RCD Field",
          "visual_location": "Issue dialog - date input",
          "identification_strategy": [
            "role=textbox with label containing 'Date'",
            "input[type='date']"
          ]
        },
        "input_value": "[Date] - Default: Today, or Backdated Date",
        "precondition": "Issue dialog is displayed",
        "resulting_state": "RCD is set",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/5a8852df-e8a5-4cd8-bd98-5f38fe0b9eb8/File_1b9d2d83573f4dea931f484fb08c9eaa_text_export.jpeg",
        "confidence": "high",
        "notes": "RCD can be backdated but not future dated"
      },
      {
        "step_id": "step-9",
        "phase": "phase-2",
        "intent": "Select benefits to issue",
        "action": "select",
        "ui_element": {
          "type": "checkbox",
          "label": "Benefits Checkboxes",
          "visual_location": "Issue dialog - benefits list",
          "identification_strategy": [
            "role=checkbox for each benefit",
            "[data-testid='benefit-checkbox']"
          ]
        },
        "precondition": "Issue dialog with benefits list is displayed",
        "resulting_state": "Required benefits are selected",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/4f162503-db0c-4015-b3b3-072b81dfb65f/File_585b0138e8ab406a937765860915a28f_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-10",
        "phase": "phase-2",
        "intent": "Finalize issuance of the first plan",
        "action": "sequence",
        "sub_steps": [
          {
            "action": "verify",
            "ui_element": {
              "type": "text",
              "label": "Premium Amounts"
            },
            "verification": "Premiums match expected values"
          },
          {
            "action": "click",
            "ui_element": {
              "type": "button",
              "label": "Issue",
              "identification_strategy": [
                "role=button with name='Issue'",
                "Primary action button in issue dialog"
              ]
            }
          }
        ],
        "precondition": "Benefits selected and premiums displayed",
        "resulting_state": "First plan is issued - status changes to 'In Force'",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/9091e08f-bfe4-4984-bf34-c6ad66f982fa/File_32747b837c744dc7af5988ceb05e3c04_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-11",
        "phase": "phase-3",
        "intent": "Return to workflow to close tasks",
        "action": "click",
        "ui_element": {
          "type": "tab",
          "label": "Diary & Workflow",
          "visual_location": "Tab navigation bar",
          "identification_strategy": [
            "role=tab with name='Diary & Workflow'"
          ]
        },
        "precondition": "Plan status has changed to 'In Force'",
        "resulting_state": "Diary & Workflow panel is visible",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/4e74fbc3-3c44-4a3e-abea-9b470d05c481/user_cropped_screenshot_b0b2d733ba1b42c9bbbe61f42c06de95_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-12",
        "phase": "phase-3",
        "intent": "Open the In Progress task",
        "action": "click",
        "ui_element": {
          "type": "link",
          "label": "Task Item",
          "visual_location": "Task list",
          "identification_strategy": [
            "role=row or role=link with task name",
            "Task with status 'In Progress'"
          ]
        },
        "precondition": "Diary & Workflow panel is visible",
        "resulting_state": "Task detail dialog is open",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/c6f7dc1b-efd5-4ab2-a1b1-785eb55f5f03/File_ac7eefa6125446899b1ff01ada55b879_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-13",
        "phase": "phase-3",
        "intent": "Mark task as completed",
        "action": "select",
        "ui_element": {
          "type": "dropdown",
          "label": "Status Dropdown",
          "visual_location": "Task detail dialog",
          "identification_strategy": [
            "role=combobox with label='Status'",
            "[data-testid='task-status-dropdown']"
          ]
        },
        "select_value": "Completed",
        "precondition": "Task detail dialog is open",
        "resulting_state": "Task status is set to 'Completed'",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/f2871396-70fd-4841-b2ff-4d76bc45d519/File_13225d6518174dc0a22b4a9899f670a2_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-14",
        "phase": "phase-3",
        "intent": "Save the task completion",
        "action": "click",
        "ui_element": {
          "type": "button",
          "label": "Save",
          "visual_location": "Task detail dialog - footer",
          "identification_strategy": [
            "role=button with name='Save'",
            "[data-testid='save-button']"
          ]
        },
        "precondition": "Task status is set to 'Completed'",
        "resulting_state": "Task is saved and marked complete",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/0189fda3-f113-4111-bf83-3097f866e778/File_c13b45a1388c4f6592c5e67ff7bfc74e_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-15",
        "phase": "phase-4",
        "intent": "Switch to the linked SMSF plan",
        "action": "click",
        "ui_element": {
          "type": "link",
          "label": "SMSF Plan Link/Tab",
          "visual_location": "Linked plans section or navigation",
          "identification_strategy": [
            "role=link with SMSF plan number",
            "Link containing 'SMSF' or linked plan ID"
          ]
        },
        "precondition": "Ordinary plan tasks are completed",
        "resulting_state": "SMSF plan detail page is displayed",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/2e942ac4-a307-49db-a9ee-c1a778283c7c/File_93e9a2915c9745f5915defcc5b63eaa6_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-16",
        "phase": "phase-4",
        "intent": "Initiate issue for SMSF plan",
        "action": "click",
        "ui_element": {
          "type": "button",
          "label": "Issue",
          "visual_location": "Benefits panel action area",
          "identification_strategy": [
            "role=button with name='Issue'"
          ]
        },
        "precondition": "SMSF plan detail page is displayed",
        "resulting_state": "Issue dialog is displayed for SMSF plan",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/a8a3fdf7-ba8a-4b8e-88c6-ca978b81f6b9/File_f03dd0a209524c00b0ed0b4745dd9f07_text_export.jpeg",
        "confidence": "high",
        "notes": "Repeat issue steps similar to Ordinary plan"
      },
      {
        "step_id": "step-17",
        "phase": "phase-4",
        "intent": "Confirm Date",
        "action": "click",
        "ui_element": {
          "type": "button",
          "label": "OK",
          "visual_location": "Issue dialog - footer",
          "identification_strategy": [
            "role=button with name='OK'"
          ]
        },
        "precondition": "Issue dialog is displayed",
        "resulting_state": "Date is confirmed",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/ff27fd46-5feb-4f5b-ad07-3e46bade3db8/File_9bc183b2a0994127b2a681bb7b1b92e1_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-18",
        "phase": "phase-4",
        "intent": "Select benefits for SMSF",
        "action": "select",
        "ui_element": {
          "type": "checkbox",
          "label": "Benefit Checkbox",
          "visual_location": "Issue dialog - benefits list",
          "identification_strategy": [
            "role=checkbox",
            "[data-testid='benefit-checkbox']"
          ]
        },
        "precondition": "Issue dialog with benefits is displayed",
        "resulting_state": "SMSF benefits are selected",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/685433cc-920c-4b6a-879b-08da1e8ee5af/File_e9b6d1501e214146af0733870af8d43a_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-19",
        "phase": "phase-4",
        "intent": "Finalize SMSF Issue",
        "action": "click",
        "ui_element": {
          "type": "button",
          "label": "Issue",
          "visual_location": "Issue dialog - footer",
          "identification_strategy": [
            "role=button with name='Issue'"
          ]
        },
        "precondition": "SMSF benefits are selected",
        "resulting_state": "SMSF plan is issued - status changes to 'In Force'",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/b0222616-208e-459e-b703-e5c7414082e8/File_700abce8619f4f00aa3ec729c1903e52_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-20",
        "phase": "phase-5",
        "intent": "Return to workflow",
        "action": "click",
        "ui_element": {
          "type": "tab",
          "label": "Diary & Workflow",
          "visual_location": "Tab navigation bar",
          "identification_strategy": [
            "role=tab with name='Diary & Workflow'"
          ]
        },
        "precondition": "SMSF plan is issued",
        "resulting_state": "Diary & Workflow panel is visible",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-07-22/9272758c-9872-4e53-b250-74e9b07e3011/File_cc76b9975fd549b2b733e8bced0be97c_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-21-23",
        "phase": "phase-5",
        "intent": "Close SMSF tasks",
        "action": "sequence",
        "sub_steps": [
          {
            "action": "click",
            "ui_element": {
              "type": "link",
              "label": "Task"
            }
          },
          {
            "action": "select",
            "ui_element": {
              "type": "dropdown",
              "label": "Status"
            },
            "select_value": "Completed"
          },
          {
            "action": "click",
            "ui_element": {
              "type": "button",
              "label": "Save"
            }
          }
        ],
        "precondition": "SMSF Diary & Workflow panel is visible",
        "resulting_state": "All SMSF tasks are marked complete",
        "confidence": "high",
        "notes": "Repeat for each In Progress task"
      }
    ],
    "postconditions": [
      "Ordinary Plan Status: 'In Force'",
      "SMSF Plan Status: 'In Force'",
      "All workflow tasks for both plans: 'Completed'"
    ],
    "automation_notes": {
      "critical_validations": [
        "Handle 'Linked' plans by ensuring the first plan is issued before expecting the second one to be ready",
        "Verify status changes to 'In Force' for both plans",
        "Ensure premiums match for both plans before issuing"
      ],
      "wait_conditions": [
        "Wait for plan status to change after issue",
        "Wait for task list to refresh after saving",
        "Wait for linked plan to be accessible after first plan is issued"
      ],
      "reusable_sequences": [
        {
          "name": "issue_plan",
          "steps": [
            "click Benefits tab",
            "click Issue",
            "set date",
            "select benefits",
            "verify premiums",
            "click Issue"
          ]
        },
        {
          "name": "close_task",
          "steps": [
            "click task",
            "select Completed",
            "click Save"
          ]
        }
      ]
    },
    "edge_cases": [
      {
        "scenario": "First plan issue fails",
        "handling": "Do not proceed to SMSF plan - investigate and resolve first plan issue"
      },
      {
        "scenario": "Linked plan not visible",
        "handling": "Verify linked relationship exists in system before proceeding"
      },
      {
        "scenario": "RCD mismatch between plans",
        "handling": "Ensure both plans have matching RCD values"
      }
    ]
  },
  {
    "flow_id": "process_standard_rates_application",
    "metadata": {
      "app": "Neos Life",
      "app_url": "https://r11uat3.neoslife.com.au/",
      "flow_type": "End-to-End Processing",
      "source": "Scribe Export",
      "original_title": "How to Process an Application Accepted as a Standard Rates by Underwriting",
      "goal": "Validate acceptance terms against quote, ensure payment details, and issue plans upon confirmation",
      "total_steps": 70,
      "estimated_duration": "30-45 minutes",
      "complexity": "very_high"
    },
    "prerequisites": [
      "User is authenticated in Neos Life system",
      "Application has been accepted at Standard Rates by Underwriting",
      "Original quote/illustration is available",
      "Both Ordinary and SMSF/Super plans exist (if linked)"
    ],
    "phases": [
      {
        "phase_id": "phase-1",
        "name": "Validation",
        "description": "Verify acceptance terms match original quote, check benefits, loadings, exclusions, and payment details",
        "steps_range": "1-41"
      },
      {
        "phase_id": "phase-2",
        "name": "Task Update",
        "description": "Close Standard Rates task, create 'Await Inforce' tracking task",
        "steps_range": "42-45"
      },
      {
        "phase_id": "phase-3",
        "name": "Issuance",
        "description": "Upon confirmation, issue both Ordinary and SMSF plans",
        "steps_range": "46-70"
      }
    ],
    "steps": [
      {
        "step_id": "step-1",
        "phase": "phase-1",
        "intent": "Access the application",
        "action": "navigate",
        "ui_element": {
          "type": "url",
          "label": "Neos Life Application",
          "url": "https://r11uat3.neoslife.com.au/"
        },
        "precondition": "User has valid credentials",
        "resulting_state": "Application home page is displayed",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-06-20/80168f67-b51b-4a3d-89f2-d70ec32eaf64/ascreenshot_6d29dfc2523243db965390434706e4ed_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-2",
        "phase": "phase-1",
        "intent": "Open the specific plan",
        "action": "click",
        "ui_element": {
          "type": "link",
          "label": "Plan Number",
          "visual_location": "Plan list / Search results",
          "identification_strategy": [
            "role=link containing plan number",
            "Clickable text with plan ID format"
          ]
        },
        "precondition": "Plan is visible in list",
        "resulting_state": "Plan detail page is displayed",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-06-20/80168f67-b51b-4a3d-89f2-d70ec32eaf64/ascreenshot_9ab4874cddbf49798f5cabfa30a8d837_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-3",
        "phase": "phase-1",
        "intent": "Access workflow tasks",
        "action": "click",
        "ui_element": {
          "type": "tab",
          "label": "Diary & Workflow",
          "visual_location": "Tab navigation bar",
          "identification_strategy": [
            "role=tab with name='Diary & Workflow'"
          ]
        },
        "precondition": "Plan detail page is displayed",
        "resulting_state": "Diary & Workflow panel is visible",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-06-20/8ad1b459-e85d-43f0-b559-99a390fd8cb6/ascreenshot_9c45233e174344cbb0ed8f933a9ed7c0_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-4",
        "phase": "phase-1",
        "intent": "View acceptance terms",
        "action": "click",
        "ui_element": {
          "type": "link",
          "label": "Standard Rates Task",
          "visual_location": "Task list",
          "identification_strategy": [
            "role=row or role=link with text containing 'Standard Rates'",
            "Task item indicating acceptance decision"
          ]
        },
        "precondition": "Diary & Workflow panel is visible",
        "resulting_state": "Standard Rates task detail is displayed",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-06-20/208bc5fd-e050-4f0b-a879-0349f7cb9e6d/ascreenshot_18a5c19665ef422d95fddaa996794c42_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-5",
        "phase": "phase-1",
        "intent": "Close task view",
        "action": "click",
        "ui_element": {
          "type": "button",
          "label": "Close Button (X)",
          "visual_location": "Dialog header - top right",
          "identification_strategy": [
            "role=button with aria-label='Close'",
            "Button with text 'X'"
          ]
        },
        "precondition": "Task detail dialog is open",
        "resulting_state": "Task detail dialog is closed",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-06-20/494228a2-3437-4116-9d9d-f59620fc002b/ascreenshot_808c3b0555c04f4dad7ca8ec334534a7_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-6",
        "phase": "phase-1",
        "intent": "Retrieve original quote",
        "action": "click",
        "ui_element": {
          "type": "tab",
          "label": "Correspondence",
          "visual_location": "Tab navigation bar",
          "identification_strategy": [
            "role=tab with name='Correspondence'"
          ]
        },
        "precondition": "Plan detail page is displayed",
        "resulting_state": "Correspondence panel is visible",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-06-20/ab807a89-93e6-4df3-9b25-529d802d934d/ascreenshot_9d22654e79e341758f30389715ea6f5f_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-7-9",
        "phase": "phase-1",
        "intent": "Download and verify quote documents",
        "action": "download",
        "ui_element": {
          "type": "link",
          "label": "Revised Illustration PDF",
          "visual_location": "Correspondence list",
          "identification_strategy": [
            "role=link with text containing 'Illustration' or 'Quote'",
            "PDF download link"
          ]
        },
        "precondition": "Correspondence panel is visible",
        "resulting_state": "Quote document is downloaded for review",
        "confidence": "high"
      },
      {
        "step_id": "step-10-16",
        "phase": "phase-1",
        "intent": "Verify Plan Benefits against Underwriting Decision",
        "action": "verify",
        "ui_element": {
          "type": "text",
          "label": "Benefit Details",
          "visual_location": "Benefits panel",
          "identification_strategy": [
            "Benefits section content",
            "Smoker status field",
            "Loadings section",
            "Exclusions section"
          ]
        },
        "verification_targets": [
          "Benefit Details match quote",
          "Smoker Status is correct",
          "Loadings match underwriting decision",
          "Exclusions match underwriting decision"
        ],
        "precondition": "Quote document is available for comparison",
        "resulting_state": "All benefit details verified against quote",
        "confidence": "high",
        "notes": "Critical validation step - do not proceed if mismatches found"
      },
      {
        "step_id": "step-17",
        "phase": "phase-1",
        "intent": "Switch to Linked Super Plan",
        "action": "click",
        "ui_element": {
          "type": "link",
          "label": "Super Plan Tab/Link",
          "visual_location": "Linked plans section or navigation",
          "identification_strategy": [
            "role=link with Super plan number",
            "Link containing 'Super' or 'SMSF'"
          ]
        },
        "precondition": "Ordinary plan verification complete",
        "resulting_state": "Super plan detail page is displayed",
        "visual_reference": "https://colony-recorder.s3.amazonaws.com/files/2025-06-20/91433863-6e28-4e8d-b33e-3ee7e8f6e1e1/ascreenshot_1563061166964487822a18fcbd5fd931_text_export.jpeg",
        "confidence": "high"
      },
      {
        "step_id": "step-18-24",
        "phase": "phase-1",
        "intent": "Verify Linked Plan Benefits",
        "action": "verify",
        "ui_element": {
          "type": "text",
          "label": "Benefit Details (Super)",
          "visual_location": "Benefits panel",
          "identification_strategy": [
            "Benefits section content",
            "Underwriting notes"
          ]
        },
        "verification_targets": [
          "Super plan benefit details match quote",
          "Underwriting notes are consistent"
        ],
        "precondition": "Super plan detail page is displayed",
        "resulting_state": "Super plan benefits verified",
        "confidence": "high"
      },
      {
        "step_id": "step-25-28",
        "phase": "phase-1",
        "intent": "Verify Payment Details (SMSF/Super)",
        "action": "verify",
        "ui_element": {
          "type": "text",
          "label": "Periodic Debits",
          "visual_location": "Payment details section",
          "identification_strategy": [
            "Text containing 'Periodic Debits'",
            "Payment details panel"
          ]
        },
        "verification_targets": [
          "Payment details are present",
          "Debit schedule is configured"
        ],
        "precondition": "Super plan detail page is displayed",
        "resulting_state": "Super plan payment details verified",
        "confidence": "high"
      },
      {
        "step_id": "step-29-41",
        "phase": "phase-1",
        "intent": "Verify Payment Details (Ordinary) and Return to Ordinary Plan",
        "action": "sequence",
        "sub_steps": [
          {
            "action": "click",
            "ui_element": {
              "type": "link",
              "label": "Ordinary Plan"
            }
          },
          {
            "action": "verify",
            "ui_element": {
              "type": "text",
              "label": "Periodic Debits"
            }
          }
        ],
        "precondition": "Super plan verification complete",
        "resulting_state": "Ordinary plan payment details verified",
        "confidence": "high"
      },
      {
        "step_id": "step-42-45",
        "phase": "phase-2",
        "intent": "Manage Diary Tasks (Close Standard Rates, Open Await Inforce)",
        "action": "sequence",
        "sub_steps": [
          {
            "action": "update_task",
            "task_name": "Standard Rates",
            "new_status": "Completed"
          },
          {
            "action": "create_task",
            "task_name": "Accepted - await inforce date",
            "assignee": "Service Consultant",
            "status": "In Progress",
            "follow_up": "1-2 weeks"
          }
        ],
        "precondition": "All validation steps complete",
        "resulting_state": "Standard Rates task closed, Await Inforce task created",
        "confidence": "high",
        "notes": "This marks the end of Phase 1/2 - await external confirmation before Phase 3"
      },
      {
        "step_id": "step-46",
        "phase": "phase-3",
        "intent": "Verify Confirmation received",
        "action": "verify",
        "ui_element": {
          "type": "text",
          "label": "Confirmation Task",
          "visual_location": "Task list",
          "identification_strategy": [
            "Task containing 'Confirmation' or 'inforce'"
          ]
        },
        "precondition": "External confirmation has been received (async wait)",
        "resulting_state": "Confirmation to issue is verified",
        "confidence": "high",
        "notes": "Phase 3 begins after receiving external confirmation"
      },
      {
        "step_id": "step-47-52",
        "phase": "phase-3",
        "intent": "Issue Ordinary Plan",
        "action": "sequence",
        "sub_steps": [
          {
            "action": "click",
            "ui_element": {
              "type": "tab",
              "label": "Benefits"
            }
          },
          {
            "action": "click",
            "ui_element": {
              "type": "button",
              "label": "Issue"
            }
          },
          {
            "action": "select",
            "ui_element": {
              "type": "checkbox",
              "label": "All Benefits"
            }
          },
          {
            "action": "verify",
            "target": "Premiums Match"
          },
          {
            "action": "click",
            "ui_element": {
              "type": "button",
              "label": "Issue (Final)"
            }
          }
        ],
        "precondition": "Confirmation received, Ordinary plan displayed",
        "resulting_state": "Ordinary plan issued - status 'In Force'",
        "confidence": "high"
      },
      {
        "step_id": "step-53-59",
        "phase": "phase-3",
        "intent": "Close Ordinary Plan Tasks",
        "action": "update_task",
        "task_filter": "In Progress tasks",
        "new_status": "Completed",
        "precondition": "Ordinary plan is issued",
        "resulting_state": "All Ordinary plan tasks completed",
        "confidence": "high"
      },
      {
        "step_id": "step-60",
        "phase": "phase-3",
        "intent": "Switch to SMSF Plan",
        "action": "click",
        "ui_element": {
          "type": "link",
          "label": "SMSF Plan",
          "visual_location": "Linked plans section",
          "identification_strategy": [
            "role=link with SMSF plan number"
          ]
        },
        "precondition": "Ordinary plan tasks completed",
        "resulting_state": "SMSF plan detail page displayed",
        "confidence": "high"
      },
      {
        "step_id": "step-61-66",
        "phase": "phase-3",
        "intent": "Issue SMSF Plan",
        "action": "sequence",
        "sub_steps": [
          {
            "action": "click",
            "ui_element": {
              "type": "button",
              "label": "Issue"
            }
          },
          {
            "action": "click",
            "ui_element": {
              "type": "button",
              "label": "OK"
            }
          },
          {
            "action": "select",
            "ui_element": {
              "type": "checkbox",
              "label": "Confirmation Checkbox"
            }
          },
          {
            "action": "click",
            "ui_element": {
              "type": "button",
              "label": "Issue"
            }
          }
        ],
        "precondition": "SMSF plan displayed",
        "resulting_state": "SMSF plan issued - status 'In Force'",
        "confidence": "high"
      },
      {
        "step_id": "step-67-70",
        "phase": "phase-3",
        "intent": "Close SMSF Plan Tasks",
        "action": "update_task",
        "task_filter": "In Progress tasks",
        "new_status": "Completed",
        "precondition": "SMSF plan is issued",
        "resulting_state": "All SMSF plan tasks completed",
        "confidence": "high"
      }
    ],
    "postconditions": [
      "Ordinary Plan Status: 'In Force'",
      "SMSF Plan Status: 'In Force'",
      "All workflow tasks: 'Completed'",
      "Premiums match original quote exactly"
    ],
    "automation_notes": {
      "critical_validations": [
        "Validate 'Smoker Status' strictly against the Quote",
        "Validate 'Loadings' strictly against the Quote",
        "Validate 'Exclusions' strictly against the Quote",
        "Ensure Premiums match exactly before Issuing"
      ],
      "async_wait_points": [
        {
          "location": "Between Phase 2 and Phase 3",
          "description": "Wait for external confirmation to issue",
          "typical_duration": "1-2 weeks"
        }
      ],
      "reusable_sequences": [
        {
          "name": "verify_benefits",
          "steps": [
            "Navigate to Benefits",
            "Check each benefit detail",
            "Compare against quote"
          ]
        },
        {
          "name": "verify_payment_details",
          "steps": [
            "Navigate to Periodic Debits",
            "Verify payment details present"
          ]
        },
        {
          "name": "issue_plan",
          "steps": [
            "Click Benefits",
            "Click Issue",
            "Select benefits",
            "Verify premiums",
            "Click Issue"
          ]
        },
        {
          "name": "close_tasks",
          "steps": [
            "Open task",
            "Set status Completed",
            "Save"
          ]
        }
      ]
    },
    "edge_cases": [
      {
        "scenario": "Benefit mismatch with quote",
        "handling": "Do not proceed - escalate to underwriting for clarification"
      },
      {
        "scenario": "Premium discrepancy",
        "handling": "Do not issue - verify calculations and contact underwriting"
      },
      {
        "scenario": "Missing payment details",
        "handling": "Cannot proceed to issue - payment details required first"
      },
      {
        "scenario": "Confirmation not received",
        "handling": "Remain in Phase 2 - follow up per task schedule"
      }
    ],
    "business_rules": [
      "Standard Rates acceptance means no loadings or exclusions applied",
      "Both linked plans should be issued together when possible",
      "Payment details must be present before issuance",
      "Premiums must match quote exactly"
    ]
  },
  {
    "flow_id": "request_rollover_super_linked_issue_both",
    "metadata": {
      "app": "Neos Life",
      "app_url": "https://r11uat3.neoslife.com.au/",
      "flow_type": "End-to-End Processing",
      "source": "Scribe Export",
      "original_title": "How to Request Rollover for a Super with Linked Ordinary Plan and Proceeding to Issue Both Plans",
      "goal": "Request Super Rollover funds and issue both Linked and Ordinary plans",
      "total_steps": 67,
      "estimated_duration": "45-60 minutes (excluding async wait)",
      "complexity": "very_high"
    },
    "prerequisites": [
      "User is authenticated in Neos Life system",
      "Both Super and Ordinary linked plans exist",
      "Plans are in Proposal status",
      "Payment details are configured for both plans"
    ],
    "phases": [
      {
        "phase_id": "phase-1",
        "name": "Validation",
        "description": "Find and open plan, verify requirements and payment details for both plans",
        "steps_range": "1-13"
      },
      {
        "phase_id": "phase-2",
        "name": "Request Funds (Rollover)",
        "description": "Initiate the rollover request for Super funds",
        "steps_range": "14-16"
      },
      {
        "phase_id": "phase-3",
        "name": "Workflow Management (Wait for Rollover)",
        "description": "Monitor rollover request, manage tasks, create tracking task",
        "steps_range": "17-42",
        "async_wait": true,
        "typical_wait_duration": "2-3 days"
      },
      {
        "phase_id": "phase-4",
        "name": "Issuance (Post-Rollover)",
        "description": "Verify rollover success, issue both Super and Ordinary plans",
        "steps_range": "43-67"
      }
    ],
    "steps": [
      {
        "step_id": "step-1-2",
        "phase": "phase-1",
        "intent": "Find and Open Plan",
        "action": "sequence",
        "sub_steps": [
          {
            "action": "search",
            "ui_element": {
              "type": "input",
              "label": "Search Field",
              "identification_strategy": [
                "role=searchbox",
                "input[type='search']"
              ]
            },
            "input_value": "[Plan Number]"
          },
          {
            "action": "click",
            "ui_element": {
              "type": "link",
              "label": "Plan Details",
              "identification_strategy": [
                "role=link with plan number",
                "Search result row"
              ]
            }
          }
        ],
        "precondition": "User is on application home page",
        "resulting_state": "Plan detail page is displayed",
        "confidence": "high"
      },
      {
        "step_id": "step-3-7",
        "phase": "phase-1",
        "intent": "Verify Ordinary Plan Requirements & Payment Details",
        "action": "sequence",
        "sub_steps": [
          {
            "action": "click",
            "ui_element": {
              "type": "tab",
              "label": "Diary & Workflow"
            }
          },
          {
            "action": "verify",
            "ui_element": {
              "type": "text",
              "label": "Periodic Debits"
            },
            "condition": "Payment details present"
          }
        ],
        "precondition": "Plan detail page is displayed",
        "resulting_state": "Ordinary plan payment details verified",
        "confidence": "high"
      },
      {
        "step_id": "step-8-10",
        "phase": "phase-1",
        "intent": "Switch to Super Plan & Validate",
        "action": "sequence",
        "sub_steps": [
          {
            "action": "click",
            "ui_element": {
              "type": "link",
              "label": "Linked Policy Number",
              "identification_strategy": [
                "role=link with Super plan number"
              ]
            }
          },
          {
            "action": "verify",
            "ui_element": {
              "type": "text",
              "label": "Life Insured Benefits"
            }
          },
          {
            "action": "check_business_logic",
            "description": "Check if DOB/Birthday impacts premiums",
            "notes": "Important for premium calculations"
          }
        ],
        "precondition": "Ordinary plan verification complete",
        "resulting_state": "Super plan displayed and benefits verified",
        "confidence": "high"
      },
      {
        "step_id": "step-11-13",
        "phase": "phase-1",
        "intent": "Verify Super Plan Payment Details",
        "action": "verify",
        "ui_element": {
          "type": "text",
          "label": "Periodic Debits",
          "visual_location": "Payment details section",
          "identification_strategy": [
            "Text containing 'Periodic Debits'",
            "Payment details panel"
          ]
        },
        "precondition": "Super plan detail page is displayed",
        "resulting_state": "Super plan payment details verified",
        "confidence": "high"
      },
      {
        "step_id": "step-14-16",
        "phase": "phase-2",
        "intent": "Initiate Rollover Request",
        "action": "sequence",
        "sub_steps": [
          {
            "action": "click",
            "ui_element": {
              "type": "button",
              "label": "Create ROM",
              "visual_location": "Action panel",
              "identification_strategy": [
                "role=button with name='Create ROM'",
                "Button containing 'ROM'"
              ]
            }
          },
          {
            "action": "select",
            "ui_element": {
              "type": "dropdown",
              "label": "Transaction Type",
              "identification_strategy": [
                "role=combobox with label='Transaction Type'"
              ]
            },
            "select_value": "New Business"
          },
          {
            "action": "click",
            "ui_element": {
              "type": "button",
              "label": "Save",
              "identification_strategy": [
                "role=button with name='Save'"
              ]
            }
          }
        ],
        "precondition": "Super plan payment details verified",
        "resulting_state": "Rollover request (ROM) created",
        "confidence": "high",
        "notes": "ROM = Rollover Message - initiates fund transfer request"
      },
      {
        "step_id": "step-17-25",
        "phase": "phase-3",
        "intent": "Monitor Rollover Request Task",
        "action": "sequence",
        "sub_steps": [
          {
            "action": "verify",
            "ui_element": {
              "type": "text",
              "label": "Diary Task: Super message - New business rollover request",
              "identification_strategy": [
                "Task containing 'rollover request'"
              ]
            }
          },
          {
            "action": "update_task",
            "new_status": "In Progress",
            "follow_up": "2-3 days"
          }
        ],
        "precondition": "ROM has been created",
        "resulting_state": "Rollover request task is being monitored",
        "confidence": "high",
        "notes": "Async wait point - rollover response typically takes 2-3 days"
      },
      {
        "step_id": "step-26-27",
        "phase": "phase-3",
        "intent": "Clean up Super Plan Tasks",
        "action": "update_task",
        "task_filter": "Other open tasks on Super plan",
        "new_status": "Completed",
        "precondition": "Rollover request task is set up",
        "resulting_state": "Super plan tasks cleaned up",
        "confidence": "high"
      },
      {
        "step_id": "step-28-35",
        "phase": "phase-3",
        "intent": "Clean up Ordinary Plan Tasks",
        "action": "sequence",
        "sub_steps": [
          {
            "action": "click",
            "ui_element": {
              "type": "link",
              "label": "Linked Policy Number (Ordinary)",
              "identification_strategy": [
                "role=link with Ordinary plan number"
              ]
            }
          },
          {
            "action": "update_task",
            "task_filter": "Open tasks",
            "new_status": "Completed"
          }
        ],
        "precondition": "Super plan tasks cleaned up",
        "resulting_state": "Ordinary plan tasks cleaned up",
        "confidence": "high"
      },
      {
        "step_id": "step-36-42",
        "phase": "phase-3",
        "intent": "Create Tracking Task on Ordinary Plan",
        "action": "create_task",
        "task_details": {
          "event": "Await concurrent rollover",
          "task_name": "Await concurrent rollover",
          "status": "In Progress",
          "follow_up": "2 weeks"
        },
        "precondition": "Ordinary plan tasks cleaned up",
        "resulting_state": "Tracking task created for rollover wait",
        "confidence": "high",
        "notes": "This marks end of Phase 3 - async wait for rollover response"
      },
      {
        "step_id": "step-43-44",
        "phase": "phase-4",
        "intent": "Verify Rollover Success (Super Plan)",
        "action": "verify",
        "ui_element": {
          "type": "text",
          "label": "Rollover Response Message",
          "visual_location": "Diary & Workflow",
          "identification_strategy": [
            "Task containing 'rollover response'",
            "Super Message with rollover status"
          ]
        },
        "condition": "Response is Successful (Funds Received)",
        "precondition": "Rollover response has been received (async)",
        "resulting_state": "Rollover success confirmed",
        "confidence": "high",
        "notes": "CRITICAL: Do not proceed if rollover response is a rejection"
      },
      {
        "step_id": "step-45-47",
        "phase": "phase-4",
        "intent": "Verify Ordinary Plan Readiness",
        "action": "verify",
        "ui_element": {
          "type": "text",
          "label": "Diary & Workflow",
          "visual_location": "Ordinary plan workflow section",
          "identification_strategy": [
            "Diary & Workflow tab content"
          ]
        },
        "condition": "No new blocks/instructions",
        "precondition": "Rollover success confirmed",
        "resulting_state": "Ordinary plan ready for issuance",
        "confidence": "high"
      },
      {
        "step_id": "step-48-57",
        "phase": "phase-4",
        "intent": "Issue Super Plan",
        "action": "sequence",
        "sub_steps": [
          {
            "action": "click",
            "ui_element": {
              "type": "link",
              "label": "Linked Policy Number (Super)"
            }
          },
          {
            "action": "click",
            "ui_element": {
              "type": "button",
              "label": "Issue"
            }
          },
          {
            "action": "click",
            "ui_element": {
              "type": "button",
              "label": "OK"
            }
          },
          {
            "action": "select",
            "ui_element": {
              "type": "checkbox",
              "label": "Benefits"
            }
          },
          {
            "action": "click",
            "ui_element": {
              "type": "button",
              "label": "Issue (Final)"
            }
          },
          {
            "action": "update_task",
            "new_status": "Completed"
          }
        ],
        "precondition": "Rollover funds received, Ordinary plan ready",
        "resulting_state": "Super plan issued - status 'In Force'",
        "confidence": "high"
      },
      {
        "step_id": "step-58-67",
        "phase": "phase-4",
        "intent": "Issue Ordinary Plan",
        "action": "sequence",
        "sub_steps": [
          {
            "action": "click",
            "ui_element": {
              "type": "link",
              "label": "Linked Policy Number (Ordinary)"
            }
          },
          {
            "action": "click",
            "ui_element": {
              "type": "button",
              "label": "Issue"
            }
          },
          {
            "action": "click",
            "ui_element": {
              "type": "button",
              "label": "OK"
            }
          },
          {
            "action": "select",
            "ui_element": {
              "type": "checkbox",
              "label": "Benefits"
            }
          },
          {
            "action": "click",
            "ui_element": {
              "type": "button",
              "label": "Issue (Final)"
            }
          },
          {
            "action": "update_task",
            "new_status": "Completed"
          }
        ],
        "precondition": "Super plan issued",
        "resulting_state": "Ordinary plan issued - status 'In Force'",
        "confidence": "high"
      }
    ],
    "postconditions": [
      "Super Plan Status: 'In Force'",
      "Ordinary Plan Status: 'In Force'",
      "Rollover funds received and applied",
      "All workflow tasks: 'Completed'",
      "RCD matches on both plans"
    ],
    "automation_notes": {
      "critical_validations": [
        "Ensure RCD matches on both plans",
        "Do not issue if Rollover Response is a rejection",
        "Verify DOB/Birthday impact on premiums before proceeding"
      ],
      "async_wait_points": [
        {
          "location": "Between Phase 3 and Phase 4",
          "description": "Wait for rollover response from Super fund",
          "typical_duration": "2-3 days",
          "trigger": "Super message - rollover response received"
        }
      ],
      "critical_decision_points": [
        {
          "step": "step-43-44",
          "decision": "Rollover response status",
          "if_success": "Proceed to issue both plans",
          "if_failure": "Do NOT issue - investigate rejection reason"
        }
      ],
      "reusable_sequences": [
        {
          "name": "verify_payment_details",
          "steps": [
            "Navigate to Periodic Debits",
            "Verify payment details present"
          ]
        },
        {
          "name": "issue_plan",
          "steps": [
            "Click Issue",
            "Click OK",
            "Select Benefits",
            "Click Issue (Final)"
          ]
        },
        {
          "name": "close_tasks",
          "steps": [
            "Open task",
            "Set status Completed",
            "Save"
          ]
        },
        {
          "name": "create_tracking_task",
          "steps": [
            "Create new task",
            "Set event/name",
            "Set status In Progress",
            "Set follow-up date"
          ]
        }
      ]
    },
    "edge_cases": [
      {
        "scenario": "Rollover rejection",
        "handling": "Do NOT proceed with issuance - investigate rejection reason, may need to re-request or use alternative funding"
      },
      {
        "scenario": "Partial rollover",
        "handling": "Verify sufficient funds received before proceeding"
      },
      {
        "scenario": "RCD mismatch between plans",
        "handling": "Ensure both plans have matching RCD values before issuing"
      },
      {
        "scenario": "DOB/Birthday impacts premium",
        "handling": "Recalculate premiums if birthday occurs during processing"
      },
      {
        "scenario": "Rollover delayed beyond 2 weeks",
        "handling": "Follow up with Super fund, update tracking task follow-up date"
      }
    ],
    "business_rules": [
      "Rollover request is asynchronous - flow assumes return > 1 day later",
      "Both linked plans should have matching RCD",
      "Super plan typically issued first (funds source)",
      "Ordinary plan issued after Super plan confirmation"
    ],
    "terminology": {
      "ROM": "Rollover Message - request to transfer funds from another Super fund",
      "RCD": "Risk Commencement Date - when coverage begins",
      "Super": "Superannuation fund (retirement savings)",
      "SMSF": "Self-Managed Super Fund"
    }
  }
];