(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{371:function(e,t,a){"use strict";a.r(t);var s=a(39),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"grid-eye"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grid-eye"}},[e._v("#")]),e._v(" Grid-EYE")]),e._v(" "),a("p",[a("strong",[e._v("Integration Key:")]),e._v(" "),a("code",[e._v("gridEye")])]),e._v(" "),a("p",[e._v("The Grid-EYE sensor by Panasonic is a thermopile sensor that can be used to measure a 64x64 matrix of temperatures in front of its lense. This data can be used to detect human presence in the room, even if the person is stationary. This is done by analyzing the temperature readings for localized peaks, i.e. certain spots have a notably higher temperature than the rest. SparkFun sells a "),a("a",{attrs:{href:"https://www.sparkfun.com/products/14607",target:"_blank",rel:"noopener noreferrer"}},[e._v("version of the sensor"),a("OutboundLink")],1),e._v(" that can be easily connected to Linux boards and will also work with this component.")]),e._v(" "),a("p",[e._v("This integration will provide a sensor that contains a count of people in the room. It also includes their coordinates (relative to the sensor view) in the sensor attributes.")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("The sensor needs to be connected to the I"),a("sup",[e._v("2")]),e._v("C pins on your machine.")]),e._v(" "),a("h3",{attrs:{id:"running-with-nodejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-with-nodejs"}},[e._v("#")]),e._v(" Running with NodeJS")]),e._v(" "),a("p",[e._v("For Raspberry Pi devices the I"),a("sup",[e._v("2")]),e._v("C interface also needs to be enabled using "),a("code",[e._v("sudo raspi-config")]),e._v(" and then enabling the I"),a("sup",[e._v("2")]),e._v("C option under Advanced Options.")]),e._v(" "),a("h3",{attrs:{id:"running-with-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-with-docker"}},[e._v("#")]),e._v(" Running with Docker")]),e._v(" "),a("p",[e._v("Your i2c device needs to be enabled on the host and mapped into the container as a device like shown below.")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Example docker-compose.yml")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'3'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("room-assistant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" mkerix/room"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("assistant\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("network_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" host\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" /var/run/dbus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("/var/run/dbus\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("devices")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" /dev/i2c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("NODE_CONFIG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[e._v('\n        {\n          "global": {\n            "instanceName": "changeme",\n            "integrations": ["gridEye"]\n          }\n        }')]),e._v("\n")])])])]),e._v(" "),a("h3",{attrs:{id:"running-with-home-assistant-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-with-home-assistant-os"}},[e._v("#")]),e._v(" Running with Home Assistant OS")]),e._v(" "),a("p",[e._v("You will need to enable the i2c interface by following the "),a("a",{attrs:{href:"https://www.home-assistant.io/hassio/enable_i2c/",target:"_blank",rel:"noopener noreferrer"}},[e._v("official Home Assistant OS guide"),a("OutboundLink")],1),e._v(". The "),a("code",[e._v("config.txt")]),e._v(" file that you create should also contain an additional option, leading to the following contents:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dtparam=i2c1=on\ndtparam=i2c_arm=on\ndtparam=i2c_baudrate=10000\n")])])]),a("p",[e._v("Reboot after you imported your config in the supervisor.")]),e._v(" "),a("h2",{attrs:{id:"sensor-placement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sensor-placement"}},[e._v("#")]),e._v(" Sensor placement")]),e._v(" "),a("p",[e._v("When placing your sensor you need to consider a few factors to get reliable results:")]),e._v(" "),a("ul",[a("li",[e._v("Don't face the sensor towards a source of heat that is less than 5 meters away, for example radiators or windows.")]),e._v(" "),a("li",[e._v("Make sure the sensor has a clear view of all areas that you want to track.")]),e._v(" "),a("li",[e._v("Consider the range of the sensor, the further away people are the harder it will be to reliably detect them.")]),e._v(" "),a("li",[e._v("Consider the field of view as stated in the datasheet.")])]),e._v(" "),a("h2",{attrs:{id:"settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[e._v("#")]),e._v(" Settings")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Default")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("busNumber")])]),e._v(" "),a("td",[e._v("Number")]),e._v(" "),a("td",[a("code",[e._v("1")])]),e._v(" "),a("td",[e._v("I"),a("sup",[e._v("2")]),e._v("C bus number of your machine that the sensor is connected to.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("address")])]),e._v(" "),a("td",[e._v("Number")]),e._v(" "),a("td",[a("code",[e._v("0x69")])]),e._v(" "),a("td",[e._v("I"),a("sup",[e._v("2")]),e._v("C address of the D6T sensor that you want to use.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("deltaThreshold")])]),e._v(" "),a("td",[e._v("Number")]),e._v(" "),a("td",[a("code",[e._v("2")])]),e._v(" "),a("td",[e._v("Minimum temperature difference between average and single temperature pixel in °C for it to be considered as human presence. Increase if you are seeing false positives, decrease if you are seeing false negatives.")])])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Example Config")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("global")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("integrations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" gridEye\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("gridEye")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("deltaThreshold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);