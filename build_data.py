import json
import glob
import os

# Find all spec files
files = [
    "issue_smsf_ordinary_backdated-spec.json",
    "issue_smsf_ordinary_linked-spec.json",
    "process_standard_rates_application-spec.json",
    "request_rollover_super_linked_issue_both-spec.json"
]

workflow_data = []

print(f"Looking for files in {os.getcwd()}")

for filename in files:
    if os.path.exists(filename):
        print(f"Processing {filename}...")
        try:
            with open(filename, 'r') as f:
                data = json.load(f)
                # Ensure structure
                if 'metadata' in data:
                    workflow_data.append(data)
        except Exception as e:
            print(f"Error reading {filename}: {e}")
    else:
        print(f"File not found: {filename}")

output_path = 'workflow_visualizer/data.js'
with open(output_path, 'w') as f:
    js_content = f"const workflowData = {json.dumps(workflow_data, indent=2)};"
    f.write(js_content)

print(f"Successfully wrote {len(workflow_data)} workflows to {output_path}")
