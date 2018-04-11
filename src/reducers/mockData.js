const mockData = {
    1: [{
        "coreData": {
            "id": "7d7f415b4f1153000a614ebf9310c792",
            "number": "INC0010055",
            "lastUpdateDate": "2018-04-11 02:50:55",
            "type": "INCIDENT",
            "state": "New",
            "shortDescription": "New ticket",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.68
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.32
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.545
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.18366666666666667
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.17366666666666664
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.545
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.18366666666666667
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.17366666666666664
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.68
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.32
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.92
                    },
                    {
                        "label": "ATS",
                        "prob": 0.08
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.674,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-11 02:50:55",
            "sys_domain": "global",
            "state": "New",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-11 02:50:55",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "0",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    },
    {
        "coreData": {
            "id": "a1c2e09f4f9d13000a614ebf9310c741",
            "number": "INC0010054",
            "lastUpdateDate": "2018-04-10 23:35:54",
            "type": "INCIDENT",
            "state": "New",
            "shortDescription": "",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.94
                    },
                    {
                        "label": "ATS",
                        "prob": 0.06
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.6833333333333333,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-10 16:35:39",
            "sys_domain": "global",
            "state": "New",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-10 16:35:39",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "Application Issue",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "1",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    },
    {
        "coreData": {
            "id": "caa0245f4f9d13000a614ebf9310c797",
            "number": "INC0010053",
            "lastUpdateDate": "2018-04-10 23:26:24",
            "type": "INCIDENT",
            "state": "In Progress",
            "shortDescription": "leon test",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.94
                    },
                    {
                        "label": "ATS",
                        "prob": 0.06
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.6833333333333333,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-10 23:26:24",
            "sys_domain": "global",
            "state": "In Progress",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-10 23:26:24",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "0",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    },
    {
        "coreData": {
            "id": "db4554974f9d13000a614ebf9310c7ec",
            "number": "INC0010052",
            "lastUpdateDate": "2018-04-10 22:36:57",
            "type": "INCIDENT",
            "state": "In Progress",
            "shortDescription": "asdf",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.94
                    },
                    {
                        "label": "ATS",
                        "prob": 0.06
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.6833333333333333,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-10 15:36:48",
            "sys_domain": "global",
            "state": "In Progress",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-10 15:36:48",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "1",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    }, {
        "coreData": {
            "id": "7d7f415b4f1153000a614ebf9310c792",
            "number": "INC0010055",
            "lastUpdateDate": "2018-04-11 02:50:55",
            "type": "INCIDENT",
            "state": "New",
            "shortDescription": "New ticket",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.68
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.32
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.545
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.18366666666666667
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.17366666666666664
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.545
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.18366666666666667
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.17366666666666664
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.68
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.32
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.92
                    },
                    {
                        "label": "ATS",
                        "prob": 0.08
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.674,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-11 02:50:55",
            "sys_domain": "global",
            "state": "New",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-11 02:50:55",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "0",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    },
    {
        "coreData": {
            "id": "a1c2e09f4f9d13000a614ebf9310c741",
            "number": "INC0010054",
            "lastUpdateDate": "2018-04-10 23:35:54",
            "type": "INCIDENT",
            "state": "New",
            "shortDescription": "",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.94
                    },
                    {
                        "label": "ATS",
                        "prob": 0.06
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.6833333333333333,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-10 16:35:39",
            "sys_domain": "global",
            "state": "New",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-10 16:35:39",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "Application Issue",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "1",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    },
    {
        "coreData": {
            "id": "caa0245f4f9d13000a614ebf9310c797",
            "number": "INC0010053",
            "lastUpdateDate": "2018-04-10 23:26:24",
            "type": "INCIDENT",
            "state": "In Progress",
            "shortDescription": "leon test",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.94
                    },
                    {
                        "label": "ATS",
                        "prob": 0.06
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.6833333333333333,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-10 23:26:24",
            "sys_domain": "global",
            "state": "In Progress",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-10 23:26:24",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "0",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    },
    {
        "coreData": {
            "id": "db4554974f9d13000a614ebf9310c7ec",
            "number": "INC0010052",
            "lastUpdateDate": "2018-04-10 22:36:57",
            "type": "INCIDENT",
            "state": "In Progress",
            "shortDescription": "asdf",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.94
                    },
                    {
                        "label": "ATS",
                        "prob": 0.06
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.6833333333333333,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-10 15:36:48",
            "sys_domain": "global",
            "state": "In Progress",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-10 15:36:48",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "1",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    }, {
        "coreData": {
            "id": "7d7f415b4f1153000a614ebf9310c792",
            "number": "INC0010055",
            "lastUpdateDate": "2018-04-11 02:50:55",
            "type": "INCIDENT",
            "state": "New",
            "shortDescription": "New ticket",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.68
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.32
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.545
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.18366666666666667
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.17366666666666664
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.545
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.18366666666666667
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.17366666666666664
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.68
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.32
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.92
                    },
                    {
                        "label": "ATS",
                        "prob": 0.08
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.674,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-11 02:50:55",
            "sys_domain": "global",
            "state": "New",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-11 02:50:55",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "0",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    },
    {
        "coreData": {
            "id": "a1c2e09f4f9d13000a614ebf9310c741",
            "number": "INC0010054",
            "lastUpdateDate": "2018-04-10 23:35:54",
            "type": "INCIDENT",
            "state": "New",
            "shortDescription": "",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.94
                    },
                    {
                        "label": "ATS",
                        "prob": 0.06
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.6833333333333333,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-10 16:35:39",
            "sys_domain": "global",
            "state": "New",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-10 16:35:39",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "Application Issue",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "1",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    },
    {
        "coreData": {
            "id": "caa0245f4f9d13000a614ebf9310c797",
            "number": "INC0010053",
            "lastUpdateDate": "2018-04-10 23:26:24",
            "type": "INCIDENT",
            "state": "In Progress",
            "shortDescription": "leon test",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.94
                    },
                    {
                        "label": "ATS",
                        "prob": 0.06
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.6833333333333333,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-10 23:26:24",
            "sys_domain": "global",
            "state": "In Progress",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-10 23:26:24",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "0",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    },
    {
        "coreData": {
            "id": "db4554974f9d13000a614ebf9310c7ec",
            "number": "INC0010052",
            "lastUpdateDate": "2018-04-10 22:36:57",
            "type": "INCIDENT",
            "state": "In Progress",
            "shortDescription": "asdf",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.94
                    },
                    {
                        "label": "ATS",
                        "prob": 0.06
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.6833333333333333,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-10 15:36:48",
            "sys_domain": "global",
            "state": "In Progress",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-10 15:36:48",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "1",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    }],
    2: [{
        "coreData": {
            "id": "7d7f415b4f1153000a614ebf9310c792",
            "number": "INC0010055",
            "lastUpdateDate": "2018-04-11 02:50:55",
            "type": "INCIDENT",
            "state": "New",
            "shortDescription": "New ticket",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.68
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.32
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.545
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.18366666666666667
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.17366666666666664
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.545
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.18366666666666667
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.17366666666666664
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.68
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.32
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.92
                    },
                    {
                        "label": "ATS",
                        "prob": 0.08
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.674,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-11 02:50:55",
            "sys_domain": "global",
            "state": "New",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-11 02:50:55",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "0",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    },
    {
        "coreData": {
            "id": "a1c2e09f4f9d13000a614ebf9310c741",
            "number": "INC0010054",
            "lastUpdateDate": "2018-04-10 23:35:54",
            "type": "INCIDENT",
            "state": "New",
            "shortDescription": "",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.94
                    },
                    {
                        "label": "ATS",
                        "prob": 0.06
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.6833333333333333,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-10 16:35:39",
            "sys_domain": "global",
            "state": "New",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-10 16:35:39",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "Application Issue",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "1",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    },
    {
        "coreData": {
            "id": "caa0245f4f9d13000a614ebf9310c797",
            "number": "INC0010053",
            "lastUpdateDate": "2018-04-10 23:26:24",
            "type": "INCIDENT",
            "state": "In Progress",
            "shortDescription": "leon test",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.94
                    },
                    {
                        "label": "ATS",
                        "prob": 0.06
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.6833333333333333,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-10 23:26:24",
            "sys_domain": "global",
            "state": "In Progress",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-10 23:26:24",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "0",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    },
    {
        "coreData": {
            "id": "db4554974f9d13000a614ebf9310c7ec",
            "number": "INC0010052",
            "lastUpdateDate": "2018-04-10 22:36:57",
            "type": "INCIDENT",
            "state": "In Progress",
            "shortDescription": "asdf",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.94
                    },
                    {
                        "label": "ATS",
                        "prob": 0.06
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.6833333333333333,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-10 15:36:48",
            "sys_domain": "global",
            "state": "In Progress",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-10 15:36:48",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "1",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    }, {
        "coreData": {
            "id": "7d7f415b4f1153000a614ebf9310c792",
            "number": "INC0010055",
            "lastUpdateDate": "2018-04-11 02:50:55",
            "type": "INCIDENT",
            "state": "New",
            "shortDescription": "New ticket",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.68
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.32
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.545
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.18366666666666667
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.17366666666666664
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.545
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.18366666666666667
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.17366666666666664
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.68
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.32
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.92
                    },
                    {
                        "label": "ATS",
                        "prob": 0.08
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.674,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-11 02:50:55",
            "sys_domain": "global",
            "state": "New",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-11 02:50:55",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "0",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    },
    {
        "coreData": {
            "id": "a1c2e09f4f9d13000a614ebf9310c741",
            "number": "INC0010054",
            "lastUpdateDate": "2018-04-10 23:35:54",
            "type": "INCIDENT",
            "state": "New",
            "shortDescription": "",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.94
                    },
                    {
                        "label": "ATS",
                        "prob": 0.06
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.6833333333333333,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-10 16:35:39",
            "sys_domain": "global",
            "state": "New",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-10 16:35:39",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "Application Issue",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "1",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    },
    {
        "coreData": {
            "id": "caa0245f4f9d13000a614ebf9310c797",
            "number": "INC0010053",
            "lastUpdateDate": "2018-04-10 23:26:24",
            "type": "INCIDENT",
            "state": "In Progress",
            "shortDescription": "leon test",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.94
                    },
                    {
                        "label": "ATS",
                        "prob": 0.06
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.6833333333333333,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-10 23:26:24",
            "sys_domain": "global",
            "state": "In Progress",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-10 23:26:24",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "0",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    },
    {
        "coreData": {
            "id": "db4554974f9d13000a614ebf9310c7ec",
            "number": "INC0010052",
            "lastUpdateDate": "2018-04-10 22:36:57",
            "type": "INCIDENT",
            "state": "In Progress",
            "shortDescription": "asdf",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.94
                    },
                    {
                        "label": "ATS",
                        "prob": 0.06
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.6833333333333333,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-10 15:36:48",
            "sys_domain": "global",
            "state": "In Progress",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-10 15:36:48",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "1",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    }, {
        "coreData": {
            "id": "7d7f415b4f1153000a614ebf9310c792",
            "number": "INC0010055",
            "lastUpdateDate": "2018-04-11 02:50:55",
            "type": "INCIDENT",
            "state": "New",
            "shortDescription": "New ticket",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.68
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.32
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.545
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.18366666666666667
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.17366666666666664
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.545
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.18366666666666667
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.17366666666666664
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.68
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.32
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.92
                    },
                    {
                        "label": "ATS",
                        "prob": 0.08
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.674,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-11 02:50:55",
            "sys_domain": "global",
            "state": "New",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-11 02:50:55",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "0",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    },
    {
        "coreData": {
            "id": "a1c2e09f4f9d13000a614ebf9310c741",
            "number": "INC0010054",
            "lastUpdateDate": "2018-04-10 23:35:54",
            "type": "INCIDENT",
            "state": "New",
            "shortDescription": "",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.94
                    },
                    {
                        "label": "ATS",
                        "prob": 0.06
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.6833333333333333,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-10 16:35:39",
            "sys_domain": "global",
            "state": "New",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-10 16:35:39",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "Application Issue",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "1",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    },
    {
        "coreData": {
            "id": "caa0245f4f9d13000a614ebf9310c797",
            "number": "INC0010053",
            "lastUpdateDate": "2018-04-10 23:26:24",
            "type": "INCIDENT",
            "state": "In Progress",
            "shortDescription": "leon test",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.94
                    },
                    {
                        "label": "ATS",
                        "prob": 0.06
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.6833333333333333,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-10 23:26:24",
            "sys_domain": "global",
            "state": "In Progress",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-10 23:26:24",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "0",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    },
    {
        "coreData": {
            "id": "db4554974f9d13000a614ebf9310c7ec",
            "number": "INC0010052",
            "lastUpdateDate": "2018-04-10 22:36:57",
            "type": "INCIDENT",
            "state": "In Progress",
            "shortDescription": "asdf",
            "application": "",
            "assignee": ""
        },
        "mlData": [
            {
                "key": "ticket_management",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "ATHOS",
                        "prob": 0.94
                    },
                    {
                        "label": "ATS",
                        "prob": 0.06
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "atr",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "ATS",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "49033-87043-31977",
                        "prob": 0.5783333333333333
                    },
                    {
                        "label": "49033-87043-31972",
                        "prob": 0.16033333333333336
                    },
                    {
                        "label": "49033-87043-31979",
                        "prob": 0.15033333333333332
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "category",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            },
            {
                "key": "close_notes",
                "source": "servicenow",
                "predictions": [
                    {
                        "label": "Training Issue",
                        "prob": 0.66
                    },
                    {
                        "label": "Application Issue",
                        "prob": 0.34
                    },
                    {
                        "label": "Configuration Issue",
                        "prob": 0.0
                    }
                ],
                "userValue": null,
                "type": "Classification"
            }
        ],
        "continuousML": false,
        "automationData": {
            "confidenceLevel": 0.6833333333333333,
            "sourceServiceName": "ATHOS",
            "sourceJobName": null,
            "automation": false,
            "template": null,
            "options": [],
            "automationOptionData": null
        },
        "editingData": {
            "editingUsers": null,
            "editing": false
        },
        "serviceData": {
            "parent": "",
            "made_sla": "true",
            "caused_by": "",
            "watch_list": "",
            "upon_reject": "Cancel all future Tasks",
            "child_incidents": "0",
            "hold_reason": "",
            "approval_history": "",
            "resolved_by": "",
            "sys_updated_by": "admin",
            "opened_by": "System Administrator",
            "user_input": "",
            "sys_created_on": "2018-04-10 15:36:48",
            "sys_domain": "global",
            "state": "In Progress",
            "sys_created_by": "admin",
            "knowledge": "false",
            "order": "",
            "calendar_stc": "",
            "closed_at": "",
            "cmdb_ci": "",
            "delivery_plan": "",
            "impact": "3 - Low",
            "active": "true",
            "work_notes_list": "",
            "business_service": "",
            "priority": "5 - Planning",
            "sys_domain_path": "/",
            "rfc": "",
            "time_worked": "",
            "expected_start": "",
            "opened_at": "2018-04-10 15:36:48",
            "business_duration": "",
            "group_list": "",
            "work_end": "",
            "caller_id": "",
            "reopened_time": "",
            "resolved_at": "",
            "approval_set": "",
            "subcategory": "null",
            "work_notes": "",
            "close_code": "null",
            "correlation_display": "",
            "delivery_task": "",
            "work_start": "",
            "assignment_group": "",
            "additional_assignee_list": "",
            "business_stc": "",
            "description": "",
            "calendar_duration": "",
            "close_notes": "",
            "notify": "Do Not Notify",
            "closed_by": "",
            "follow_up": "",
            "parent_incident": "",
            "contact_type": "null",
            "reopened_by": "",
            "urgency": "3 - Low",
            "problem_id": "",
            "company": "",
            "reassignment_count": "0",
            "activity_due": "UNKNOWN",
            "severity": "3 - Low",
            "comments": "",
            "approval": "Not Yet Requested",
            "sla_due": "UNKNOWN",
            "comments_and_work_notes": "",
            "due_date": "",
            "sys_mod_count": "1",
            "reopen_count": "0",
            "sys_tags": "",
            "escalation": "Normal",
            "upon_approval": "Proceed to Next Task",
            "location": "",
            "category": "Inquiry / Help"
        },
        "slaData": []
    }]
}

export default mockData