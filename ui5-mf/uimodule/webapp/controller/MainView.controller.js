sap.ui.define(["luigi/ui5/controller/BaseController"], function (Controller) {
    "use strict";

    return Controller.extend("luigi.ui5.controller.MainView", {
        onInit: function (Controller) {
            const oModel = new sap.ui.model.json.JSONModel();

            oModel.loadData("../model/products.json");
            this.getView().setModel(oModel);
            
            const updateCurrentLanguage = () => {
                const currentLanguage = LuigiClient.uxManager().getCurrentLocale();
                sap.ui.getCore().getConfiguration().setLanguage(currentLanguage);
              }
              
              LuigiClient.addInitListener(updateCurrentLanguage);
        },

        onListItemPress: function (oEvent) {
            const id = oEvent.getSource().getBindingContext().getProperty("id");
            const title = this.getView().getModel("i18n").getResourceBundle().getText("ModalText");

            LuigiClient.linkManager().openAsModal('/home/products/' + id, { title: title, size: 'm' });
        }
    });
});

