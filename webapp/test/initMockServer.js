sap.ui.define([
    "../localService/mockserver"
],(mockserver)=>{
    mockserver.init()
    sap.ui.require(["sap/ui/core/ComponentSupport"])

})