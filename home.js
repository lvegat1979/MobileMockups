function listViewClick(e) {
    app.navigate("controller.html", "slide");
}

function viewInitSite(e) {
    e.view.element.find("#listSite").kendoMobileListView({
        dataSource: ["Site 01", "Site 02", "Site 03", "Site 04"],
        filterable: false,
        style: "detaildisclose"
 	});
}