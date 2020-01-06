define(["../ObjectIndexBase"],(function(e){"use strict";const t=[{id:"name",
label:"Name"},{id:"contigCount",label:"# Contigs",type:"number",format:"0,0"},{
id:"dnaSize",label:"DNA Size",type:"number",format:"0,0"},{id:"gcContent",
label:"GC Content",type:"number",format:"0.000%"},{id:"externalSourceId",
label:"External Source ID"}],n={name:{label:"Name",type:"string"},dna_size:{
label:"DNA Size",type:"integer"},gc_content:{label:"GC Content",type:"float"},
external_source_id:{label:"External Source ID",type:"string"},contigs:{
label:"Contigs",type:"integer"}},a=[{key:"name",label:"Name"},{key:"dna_size",
label:"DNA Size"},{key:"gc_content",label:"GC Content"}];return class extends e{
constructor(e){super(Object.assign({},e,{indexId:"Assembly",indexVersion:1,
detailFieldDefs:t,searchFields:n,sortFields:a,
kbaseTypeModule:"KBaseGenomeAnnotations",kbaseTypeId:"Assembly",label:"Assembly"
}))}objectToData(){return{name:this.object.data.name,
dnaSize:this.object.data.dna_size,gcContent:this.object.data.gc_content,
externalSourceId:this.object.data.external_source_id,
contigCount:this.object.data.contigs}}}}));