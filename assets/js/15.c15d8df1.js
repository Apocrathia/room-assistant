(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{362:function(t,s,a){"use strict";a.r(s);var e=a(39),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ansible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ansible"}},[t._v("#")]),t._v(" Ansible")]),t._v(" "),a("p",[t._v("This guide will show you how to manage multiple instances of room-assistant around your house easily. This is especially interesting as it allows you to define common configuration and update all instances at once. Additionally, it takes care of running all the installation steps for you.")]),t._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("ul",[a("li",[t._v("Recent version of "),a("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ansible"),a("OutboundLink")],1),t._v(" (2.8+) installed on your computer/laptop")])]),t._v(" "),a("h2",{attrs:{id:"steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[t._v("#")]),t._v(" Steps")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Setup your Linux boards (e.g. Pi 3, 4 or Zero W) to the point where you can access them over the network with SSH. If you want a quick reference on how to do this for Raspberry devices you can take a look at the first section of their respective quickstart guides in the documentation.")])]),t._v(" "),a("li",[a("p",[t._v("Clone the repository containing the room-assistant playbook: "),a("code",[t._v("git clone https://github.com/mKeRix/ansible-playbooks.git")])])]),t._v(" "),a("li",[a("p",[t._v("Switch to the folder that you just cloned and run "),a("code",[t._v("ansible-galaxy install -r requirements.yml")]),t._v(" to download the dependencies.")])]),t._v(" "),a("li",[a("p",[t._v("Create a file "),a("code",[t._v("hosts.yml")]),t._v(" in the cloned folder. It should contain a list of network addresses for your devices under "),a("code",[t._v("all")]),t._v(" (e.g. "),a("code",[t._v("bedroom.local")]),t._v(" or "),a("code",[t._v("192.168.1.10")]),t._v(") and your room-assistant configuration. You can find a more detailed reference of the available options in the repository "),a("a",{attrs:{href:"https://github.com/mKeRix/ansible-playbooks#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("README"),a("OutboundLink")],1),t._v(" and the "),a("a",{attrs:{href:"https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ansible documentation"),a("OutboundLink")],1),t._v(". Below is an example that configures a generic "),a("code",[t._v("room_assistant_global_config")]),t._v(", which is partially overridden for the "),a("code",[t._v("living-room.local")]),t._v(" node.")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("'living-room.local'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("room_assistant_config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("global")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("integrations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" homeAssistant\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bluetoothClassic\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" omronD6t\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" gpio\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gpio")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("binarySensors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Motion Sensor\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deviceClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" motion\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("'bedroom.local'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vars")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("room_assistant_global_config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("global")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("integrations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" homeAssistant\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bluetoothClassic\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("homeAssistant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mqttUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mqtt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//homeassistant.local"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1883")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mqttOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" room"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("assistant\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secretpass\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bluetoothClassic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("addresses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xx:xx:xx:xx:xx:xx'")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Execute the playbook with "),a("code",[t._v("ansible-playbook -i hosts.yml -u pi room-assistant.yml")]),t._v(' to install the required dependencies and room-assistant as a service on all of the hosts in your inventory file. Note that some tasks will take a while on the first run, for example the "Install room-assistant" step. Be patient and let it finish.')])]),t._v(" "),a("li",[a("p",[t._v("Congratulations, you have installed room-assistant across a cluster of devices and can manage it from a central point now! 🎉 Whenever you want to update or change something you can simply edit your "),a("code",[t._v("hosts.yml")]),t._v(" file as needed and re-run "),a("code",[t._v("ansible-playbook -i hosts.yml -u pi room-assistant.yml")]),t._v(".")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);