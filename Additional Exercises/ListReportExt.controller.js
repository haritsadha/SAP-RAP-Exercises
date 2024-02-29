sap.ui.define([
        "sap/suite/ui/generic/template/extensionAPI/extensionAPI",
        "sap/m/MessageBox"
], function(
        extensionAPI,
        MessageBox
) {
        "use strict";

        var self;
        return sap.ui.controller("Cn.comzrap_ui_44657.ext.controller.ListReportExt", {
                onInit: function() {
                        self = this;
                        self.byId("listReport").getTable().setMode("MultiSelect");
                },
                goJump: function(oEvent) {
                        var url = "www.baidu.com";
                        //window.location.replace(url);
                        window.open(url,'_blank');
                },
                goDialog: function(oEvent) {
                        MessageBox.alert("点击弹框");
                },
                onClickActionZRAP_C_446571: function(oEvent) {
                        MessageBox.alert("点击按钮1");
                }
        });
});