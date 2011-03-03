/*
Copyright 2010-2011 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://source.fluidproject.org/svn/LICENSE.txt
*/

/*global jQuery, fluid_1_4:true, window, swfobject*/

var fluid_1_4 = fluid_1_4 || {};

(function ($, fluid) {
    fluid.uploader = fluid.uploader || {}
    
    /*
     * Transform HTML5 MIME types into file types for SWFUpload.
     */
    fluid.uploader.fileTypeTransformer = function (model, expandSpec, recurse) { 
        var fileTypes = "";
        var val = fluid.get(model, expandSpec.path); 
        var mimeTypesMap = fluid.uploader.mimeTypeRegistry;
        
        // If the fileTypes option provided is a string, do nothing.  
        if (typeof(val) === 'string') {
            return val;
        } else {
            for (var i = 0; i < val.length; i++) {
                var mimeType = val[i];
                
                for (var key in mimeTypesMap) {
                    if (mimeTypesMap[key].extension === mimeType) {
                        fileTypes = fileTypes + mimeTypesMap[key].fileTypeExtension + ",";
                    }
                }            
            }
            if (fileTypes.length === 0) {
                return "*";
            } else {
                return fileTypes.substring(0, fileTypes.length - 1);
            }
        }
    }
})(jQuery, fluid_1_4);  