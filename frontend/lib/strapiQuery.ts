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




///////////// HEADER DATA //////////////
export async function getHeaderData() {
  const url = new URL("/api/header", baseUrl);

  url.search = qs.stringify(
    {
      populate: {
        blocks: {
          populate: {
            NavbarLogo: {
              fields: ["url", "alternativeText"],
            },

            NavLinks: {
              populate: {
                icon: {
                  fields: ["url", "alternativeText"],
                },
              },
            },

            ScheduleBtn: {
              populate: true,
            },
          },
        },
      },
    }
  );

  return await fetchData(url.href);
}


///////////// FOOTER DATA //////////////
export async function getFooterData() {
  const url = new URL("/api/footer", baseUrl);

  url.search = qs.stringify({
    populate: {
      block: {
        populate: {
          FooterLogo: {
            fields: ["url", "alternativeText"]
          },
          FooterList: {
            populate: {
              links: {
                populate: true
              }
            }
          },
        },
      },

      otherpages: {
        populate: true
      },

      socialIcons: {
        populate: {
          icon: {
            fields: ["url", "alternativeText"]
          }
        }
      },

      services: {
        populate: true
      },



    }
  });

  return await fetchData(url.href);
}





////////// HOMEPAGE DATA ///////////
export async function getHomePageData() {
  const url = new URL("/api/homepage", baseUrl);

  url.search = qs.stringify(

    {
      populate: {
        block: {
          populate: {
            HeroSectionBgImg: {
              fields: ["url", "alternativeText"]
            },
            Banner: {
              populate: {
                CardImg:{
                  fields:["url","alternativeText"]
                },
                BannerBtn: {
                  populate: true
                }
              }
            },
            services: {
              populate: {
                Icon: {
                  fields: ["url", "alternativeText"]
                },
              }
            },
            AvailableLocations: {
              populate: {
                CoverImg: {
                  fields: ["url", "alternativeText"]
                },
              }
            },
            workspace_preferences: {
              populate: {
                CoverImage: {
                  fields: ["url", "alternativeText"]
                },
              }
            },
            ammenities: {
              populate: {
                Icon: {
                  fields: ["url", "alternativeText"]
                },
              }
            },
            FindPerfectSpaceCard: {
              populate: {
                ScheduleTourLink: {
                  populate: true
                },
                FindPerfectSpaceCardIcon: {
                  fields: ["url", "alternativeText"]
                }
              }
            },
            brand_collaborations: {
              populate: {
                BrandLogo: {
                  fields: ["url", "alternativeText"]
                }
              }
            },
            testimonials: {
              populate: {
                ReviewersImgae: {
                  fields: ["url", "alternativeText"]
                }
              }
            },
            BlogSectionBtn: {
              populate: true
            },
            blogs: {
              populate: {
                CoverImage: {
                  fields: ["url", "alternativeText"]
                }
              }
            },
            BGImage: {
              fields: ["url", "alternativeText"]
            },
            faqs: {
              populate: true
            }
          }
        }
      }
    }
  );

  return await fetchData(url.href);
}


///////////// ALL LOCATIONS PAGE DATA //////////
export async function getAllLocationPageData() {
  const url = new URL("/api/all-location", baseUrl);

  url.search = qs.stringify(
    {
      populate: {
        block: {
          populate: {
            BannerBtn: {
              populate: true
            },
            coverImg: {
              fields: ["url", "alternativeText"]
            },
            spaces: {
              populate: {
                SpacePreviewImages: {
                  fields: ["url", "alternativeText"]
                }
              }
            },
            AvailableLocations: {
              populate: {
                CoverImg: {
                  fields: ["url", "alternativeText"]
                }
              }
            },
            services: {
              populate: {
                Icon: {
                  fields: ["url", "alternativeText"]
                }
              }
            },
            ammenities: {
              populate: {
                Icon: {
                  fields: ["url", "alternativeText"]
                }
              }
            },
            WorkSocialImages: {
              fields: ["url", "alternativeText"]
            },
            JoinInFormSectionCoverImg: {
              fields: ["url", "alternativeText"]
            },
            faqs: {
              populate: true
            }
          }
        }
      }
    }

  );

  return await fetchData(url.href);
}



/////////// ABOUT US PAGE DATA //////////
export async function getAboutUsPageData() {
  const url = new URL("/api/about-us", baseUrl);

  url.search = qs.stringify(

    {
      populate: {
        block: {
          populate: {
            BannerBtn: {
              populate: true
            },
            coverImg: {
              fields: ["url", "alternativeText"]
            },
            spaces: {
              populate: {
                SpacePreviewImages: {
                  fields: ["url", "alternativeText"]
                }
              }
            },
            services: {
              populate: {
                Icon: {
                  fields: ["url", "alternativeText"]
                }
              }
            },
            ammenities: {
              populate: {
                Icon: {
                  fields: ["url", "alternativeText"]
                }
              }
            },
            SimpleCardComponent: {
              populate: {
                icon: {
                  fields: ["url", "alternativeText"]
                }
              }
            },
            WorkSocialImages: {
              fields: ["url", "alternativeText"]
            },
            FindPerfectSpaceCard: {
              ScheduleTourLink: {
                populate: true
              },
              FindPerfectSpaceCardIcon: {
                fields: ["url", "alternativeText"]
              }
            },
            JoinInFormSectionCoverImg: {
              fields: ["url", "alternativeText"]
            },
            faqs: {
              populate: true
            }
          }
        }
      }
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
