import qs from "qs";
// import { getAuthToken } from "@/data/services/get-token";
import { unstable_noStore as noStore } from "next/cache";
import { flattenAttributes, getStrapiURL } from "@/data/utils";

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  // const authToken = await getAuthToken();

  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, headers || {});
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

export async function getHomePageData() {
  const url = new URL("/api/homepage", baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        populate: {
          FAQ: {
            populate: true,
          },
          link: {
            populate: true,
          },
          Benifit_Cards: {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },

          Review_Card: {
            populate: {
              profileImg: {
                fields: ["url", "alternativeText"],
              },
            },
          },

          logo: {
            populate: {
              logo: {
                fields: ["url", "alternativeText"],
              },
            },
          },
          CompanyFacilitiesCard: {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },

          mapviewbtn: {
            populate: true,
          },

          spaces: {
            populate: {
              image:{
              fields:["url","alternativeText"]
              },
              ameneties:{
              populate:{
              amenetyIcon :{
               fields:["url","alternativeText"]
              },
              }
              },
              
              bookitBtn:{
              populate:true
              },
              
            },
                  },

          bookbtn: {
            populate: {
              icon: {
                fields: ["url", "alternativeText"],
              },
            },
          },

          Slidersec: {
            populate: {
              sliderimg: {
                fields: ["url"],
              },
            },
          },
          button: {
            populate: {
              icon: {
                fields: ["url"],
              },
            },
          },
          Varietyroomcard: {
            populate: {
              image: {
                fields: ["url"],
              },
            },
          },
          image: {
            fields: ["url","alternativeText"],
          },
        },

        Links: {
          populate: true,
        },

        logo: {
          fields: ["url", "alternativeText"],
        },
        searchIcon: {
          fields: ["url", "alternativeText"],
        },
      },
    },
  });

  return await fetchData(url.href);
}

export async function getNavigationData() {
  const url = new URL("/api/navigation", baseUrl);

  // url.search = qs.stringify({
  //   populate: {
  //     block: {
  //       populate: {
  //         Links: {
  //           populate: true,
  //         },

  //         logo: {
  //           fields: ["url", "alternativeText"],
  //         },
  //         searchIcon: {
  //           fields: ["url", "alternativeText"],
  //         },
  //       },
  //     },
  //   },
  // });
  url.search = qs.stringify({
    populate: {
      block: {
        populate: {
          Links: {
            populate: true,
          },

          logo: {
            fields: ["url", "alternativeText"],
          },
          
          states:{
          populate:true
          },
          
          searchIcon: {
            fields: ["url", "alternativeText"],
          },
          
           Locations:{
        populate:{
        states:{
        populate:true
        }
        }
        }
        },
        
       
        
      },
    },
  });

  return await fetchData(url.href);
}

export async function getFooterData() {
  const url = new URL("/api/footer", baseUrl);

  url.search = qs.stringify({
    populate: {
      block: {
        populate: {
          logo: {
            fields: ["url", "alternativeText"],
                },
          FooterComponent :{
            populate:{
              links:{
              populate:true
                      }
                    },
                          },
                  },
             },
       socialIcons:{
         populate:{
         socialIconLinks:{
         populate:{
           Image:{
           fields:["url","alternativeText"]
           }
         }
         }
         }
       },
       
       links :{
       populate:true
       }
              },
  });

  return await fetchData(url.href);
}


export async function getLocationData() {
  const url = new URL("/api/states", baseUrl);

  url.search = qs.stringify({
    populate: {
    cities: {
    populate: {
    space: {
    populate: {
      image:{
      fields:["url","alternativeText"]
      },
      ameneties:{
      populate:{
      amenetyIcon :{
       fields:["url","alternativeText"]
      },
      }
      },
      
      bookitBtn:{
      populate:true
      },

      SpaceLocation:{
        populate:true
      }
      
    },
          },
    block: {
    populate: {
    Slidersec : {
    populate: {
    sliderimg: {
     fields: [
                      "url",
                      "alternativeText"
                    ]
                  }
                }
              },
    Varietyroomcard : {
    populate: {
    image: {
    fields: [
                      "url",
                      "alternativeText"
                    ]
                  }
                }
              },
    image: {
    fields: [
                  "url",
                  "alternativeText"
                ]
              },
    CompanyFacilitiesCard : {
    populate: {
    image: {
    fields: [
                      "url",
                      "alternativeText"
                    ]
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  return await fetchData(url.href);
}

export async function getSpaceData() {
  const url = new URL("/api/offices", baseUrl);

  url.search = qs.stringify({
  
    populate: {
      image:{
      fields:["url","alternativeText"]
      },
      ameneties:{
      populate:{
      amenetyIcon :{
       fields:["url","alternativeText"]
      },
      }
      },
      
      bookitBtn:{
      populate:true
      },

      SpaceLocation:{
        populate:true
      },
      
      city:{
      populate:true
      }
      
    },
          }
    
       );

  return await fetchData(url.href);
}



// export async function getGlobalPageData(){      // header  and footer

//   noStore()       //This function can be used to indicate a particular component should not be cached and should render dynamically.
//     const url =  new URL(`/api/global`, baseUrl);

//     url.search =  qs.stringify({                // another way to get the data
//         populate:[
//         "header.logoText",
//         "header.ctaButton",
//         "footer.logoText",
//         "footer.socialLink",
//         ]
//       })
//       return await fetchData(url.href)
// }

// export async function getGlobalPageMetaData(){      // header  and footer    // setting metaData dynamically

//     const url =  new URL(`/api/global`, baseUrl);

//     url.search =  qs.stringify({                // another way to get the data
//        fields: ["title","description"]
//       })
//       // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!",url.href)
//       return await fetchData(url.href)
// }
