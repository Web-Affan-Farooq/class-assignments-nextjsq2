export interface Params {  // ---------------------> interface for parameters
    params: Promise<{id:string}>;
  }

export interface IBlogData { // -----------> interface for blog data
    bannerImage:{
      asset:{
        url:string;
      }
    }; 
  blogBody: Chunks[];
  description:string; 
  title: string;
  _id:string;
  }

  export interface Chunks {  // for validating mini objects from main blog body
    _key:string;
    style:string;
    children:[{
        text:string;
    }]
}