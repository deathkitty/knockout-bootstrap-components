/**
 * Created by johanvdm on 2015/06/18.
 */

$(function(){
    ko.components.register("kobs-code", {
        viewModel: function(params){
            var self = this;

            self.tagId = ko.observable(kobs.guid());
            
            self.replaceTags = function(data){
                console.log(kobs.guid());
                
                var str = "";
                
                console.log(data);
                
                for(var index in data){
                    if(data[index].outerHTML){
                        str = str + data[index].outerHTML; 
                    }else{
                        str = str + data[index].wholeText;
                    }
                }

                str = kobs.escapeHTML(str);
                
                console.log(str);
                
                document.getElementById(self.tagId()).innerHTML = str;

                $('pre #' + self.tagId()).each(function(i, block) {
                    hljs.highlightBlock(block);
                });
                //return str;
            };
        },
        template: kobsTemplates["templates/knockout-bootstrap-code.html"]
    }); 
});