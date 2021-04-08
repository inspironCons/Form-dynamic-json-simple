
const data = {
    "code": "01",
    "message": "Success",
    "data": [
        {
            "component": "Form",
            "props": {
                "field_id":"form_pelakuUsaha",
                "function":["form_onSubmit_pelakuUsaha"]
            },
            "children":[
                {
                    "row": "1",
                    "component": "Row",
                    "props": {
                    },
                    "children": [
                        {
                            "component": "Col",
                            "props": {
                                "sm": "3",
                            },
                            "children": [
                                {
                                    "component": "FormGroup",
                                    "props": null,
                                    "children": [
                                        {
                                            "component": "Label",
                                            "props": {
                                                "for": "nib"
                                            },
                                            "children": "NIB"
                                        },
                                        {
                                            "component": "Input",
                                            "props": {
                                                "type": "text",
                                                "name": "nib",
                                                "function":["form_onChange_onChangeText"],
                                                "value":true
                                            },
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "component": "Col",
                            "props": {
                                "sm": "3",
                            },
                            "children": [
                                {
                                    "component": "FormGroup",
                                    "props": {
                                    },
                                    "children": [
                                        {
                                            "component": "Label",
                                            "props": {
                                                "for": "npwp",
                                            },
                                            "children": "NPWP"
                                        },
                                        {
                                            "component": "Input",
                                            "props": {
                                                "type": "text",
                                                "name": "npwp"
                                            },
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "component": "Col",
                            "props": {
                                "sm": "6",
                            },
                            "children": [
                                {
                                    "component": "FormGroup",
                                    "props": {
                                    },
                                    "children": [
                                        {
                                            "component": "Label",
                                            "props": {
                                                "for": "namaPerusahaan"
                                            },
                                            "children": "Nama Perusahaan",
                                        },
                                        {
                                            "component": "Input",
                                            "props": {
                                                "type": "text",
                                                "name": "namaPerusahaan",
                                            },
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "row": "6",
                    "component": "Row",
                    "props": {
                    },
                    "children": [
                        {
                            "component": "Col",
                            "props": {
                                "sm": "2",
                            },
                            "children": [
                                {
                                    "component": "Button",
                                    "props": {
                                        "type":"submit",
                                        "color":"primary"
                                    },
                                    "children": "Simpan"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

export default data