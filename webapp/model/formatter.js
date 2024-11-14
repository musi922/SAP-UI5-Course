sap.ui.define([],()=>{
    return{
        statusText(sStatus){
            const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            switch (sStatus) {
                case "A":
                    return oResourceBundle.getText("invoiceStatusA")
                case "B":
                    return oResourceBundle.getText("invoiceStatusB")
                case "C":
                    return oResourceBundle.getText("invoiceStatusc")
                default:
                    return sStatus;
            }
        }
    }
})