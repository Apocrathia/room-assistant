(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{374:function(t,s,e){"use strict";e.r(s);var a=e(39),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"shell-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shell-commands"}},[t._v("#")]),t._v(" Shell Commands")]),t._v(" "),e("p",[e("strong",[t._v("Integration Key:")]),t._v(" "),e("code",[t._v("shell")])]),t._v(" "),e("p",[t._v("The Shell integration allows you to execute any shell command on a schedule and use the output as the state of a sensor. This is useful for passing metrics about the machine that room-assistant is running on or for integrating sensors that do not have native support.")]),t._v(" "),e("p",[t._v("The commands are run with the same user that room-assistant is running with, so make sure your permissions are setup accordingly.")]),t._v(" "),e("h2",{attrs:{id:"settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("sensors")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#sensors"}},[t._v("Shell Sensors")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("An array of shell sensor definitions.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("switches")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#switches"}},[t._v("Shell Switches")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("An array of shell switch definitions.")])])])]),t._v(" "),e("h3",{attrs:{id:"sensors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sensors"}},[t._v("#")]),t._v(" Sensors")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("name")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Friendly name of this sensor.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("command")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Shell command that should be executed.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("regex")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Regex that is used for parsing the stdout output of the command, if configured. Otherwise the complete output is used as the state.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("cron")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[e("a",{attrs:{href:"https://www.npmjs.com/package/node-cron#cron-syntax",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cron pattern"),e("OutboundLink")],1),t._v(" describing the schedule that this command should be run with.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("icon")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Icon that the sensor should be represented with in Home Assistant Core.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("unitOfMeasurement")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Unit of measurement of the sensor state, leave empty if none.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("deviceClass")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Home Assistant Core "),e("a",{attrs:{href:"https://www.home-assistant.io/integrations/sensor/#device-class",target:"_blank",rel:"noopener noreferrer"}},[t._v("device class"),e("OutboundLink")],1),t._v(" to be used for this sensor.")])])])]),t._v(" "),e("h3",{attrs:{id:"switches"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#switches"}},[t._v("#")]),t._v(" Switches")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("name")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Friendly name of this switch.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("onCommand")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Shell command that should be executed when the switch is turned on.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("offCommand")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Shell command that should be executed when the switch is turned off.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("icon")])]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Icon that the sensor should be represented with in Home Assistant Core.")])])])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Example Config")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("global")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("integrations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" shell\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("shell")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sensors")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Kitchen Wifi Strength\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iwconfig wlan0 | grep -i quality'")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("regex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Signal level=(-?[0-9]+) dBm'")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cron")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'* * * * *'")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("icon")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mdi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("wifi\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("unitOfMeasurement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dBm\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deviceClass")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" signal_strength\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("switches")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Onboard LED\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("onCommand")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'echo mmc0 | sudo tee /sys/class/leds/led0/trigger'")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("offCommand")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'echo none | sudo tee /sys/class/leds/led0/trigger && echo 1 | sudo tee /sys/class/leds/led0/brightness'")]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);