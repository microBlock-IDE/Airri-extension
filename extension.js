({
    name: "Airri", // Category Name
    description: "Send air quality value to Airri",
    author: "microBlock",
    category: "Communication",
    version: "1.0.2",
    icon: "/static/icon.png", // Category icon
    color: "#2ecc71", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="airri_setup">
                    <value name="wifi_name">
                        <shadow type="text">
                            <field name="TEXT">--WiFi-Name--</field>
                        </shadow>
                    </value>
                    <value name="wifi_password">
                        <shadow type="text">
                            <field name="TEXT">--WiFi-Password--</field>
                        </shadow>
                    </value>
                    <value name="email">
                        <shadow type="text">
                            <field name="TEXT">--Your-Email--</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="airri_set_station_name">
                    <value name="name">
                        <shadow type="text">
                            <field name="TEXT">โรงเรียนไมโครบล็อก</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="airri_set_station_location">
                    <value name="lat">
                        <shadow type="math_number">
                            <field name="NUM">0.0</field>
                        </shadow>
                    </value>
                    <value name="lng">
                        <shadow type="math_number">
                            <field name="NUM">0.0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="airri_set_value">
                    <value name="value">
                        <shadow type="math_number">
                            <field name="NUM">0.0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "airri_push",
    ]
});
