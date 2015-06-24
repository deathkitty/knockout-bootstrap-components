function kobsCCBExampleViewModel(){
    var self = this;

    self.testData = ko.observableArray([
        {stupidKeyName:"afrit",           idioticKeyName:"afrit",           repulsiveKeyName:false},
        {stupidKeyName:"antinomic",       idioticKeyName:"antinomic",       repulsiveKeyName:false},
        {stupidKeyName:"arrythmia",       idioticKeyName:"arrythmia",       repulsiveKeyName:false},
        {stupidKeyName:"anathematically", idioticKeyName:"anathematically", repulsiveKeyName:false},
        {stupidKeyName:"assyriology",     idioticKeyName:"assyriology",     repulsiveKeyName:false},
        {stupidKeyName:"alhazen",         idioticKeyName:"alhazen",         repulsiveKeyName:false},
        {stupidKeyName:"assailer",        idioticKeyName:"assailer",        repulsiveKeyName:false},
        {stupidKeyName:"ambrotype",       idioticKeyName:"ambrotype",       repulsiveKeyName:false},
        {stupidKeyName:"accreting",       idioticKeyName:"accreting",       repulsiveKeyName:false},
        {stupidKeyName:"awaken",          idioticKeyName:"awaken",          repulsiveKeyName:false},
        {stupidKeyName:"build",           idioticKeyName:"build",           repulsiveKeyName:false},
        {stupidKeyName:"bigheaded",       idioticKeyName:"bigheaded",       repulsiveKeyName:false},
        {stupidKeyName:"blackamoor",      idioticKeyName:"blackamoor",      repulsiveKeyName:false},
        {stupidKeyName:"bargelli",        idioticKeyName:"bargelli",        repulsiveKeyName:false},
        {stupidKeyName:"brachylogy",      idioticKeyName:"brachylogy",      repulsiveKeyName:false},
        {stupidKeyName:"beadiest",        idioticKeyName:"beadiest",        repulsiveKeyName:false},
        {stupidKeyName:"beernaert",       idioticKeyName:"beernaert",       repulsiveKeyName:false},
        {stupidKeyName:"birdhouse",       idioticKeyName:"birdhouse",       repulsiveKeyName:false},
        {stupidKeyName:"brisket",         idioticKeyName:"brisket",         repulsiveKeyName:false},
        {stupidKeyName:"belcher",         idioticKeyName:"belcher",         repulsiveKeyName:false},
        {stupidKeyName:"calvaria",        idioticKeyName:"calvaria",        repulsiveKeyName:false},
        {stupidKeyName:"carnify",         idioticKeyName:"carnify",         repulsiveKeyName:false},
        {stupidKeyName:"creationistic",   idioticKeyName:"creationistic",   repulsiveKeyName:false},
        {stupidKeyName:"cavil",           idioticKeyName:"cavil",           repulsiveKeyName:false},
        {stupidKeyName:"coehorn",         idioticKeyName:"coehorn",         repulsiveKeyName:false},
        {stupidKeyName:"ciconians",       idioticKeyName:"ciconians",       repulsiveKeyName:false},
        {stupidKeyName:"cristbal",        idioticKeyName:"cristbal",        repulsiveKeyName:false},
        {stupidKeyName:"capitaliser",     idioticKeyName:"capitaliser",     repulsiveKeyName:false},
        {stupidKeyName:"confirmand",      idioticKeyName:"confirmand",      repulsiveKeyName:false},
        {stupidKeyName:"cowbane",         idioticKeyName:"cowbane",         repulsiveKeyName:false}
    ]);

    self.selectedItems = ko.observableArray();
}

$(function(){
    ko.applyBindings(new kobsCCBExampleViewModel(), document.getElementById("main"));
});