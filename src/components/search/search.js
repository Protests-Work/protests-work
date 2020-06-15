import PAGECONTENT from "../../content/impact.json";
import Fuse from fuse.js

const searchOptions =  { 
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.4,
    // distance: 100,
    // useExtendedSearch: false,
    keys: [
    "title",
    "protest"
    "tags"
    ]
};


const fuse = new Fuse(PAGECONTENT, searchOptions);

// Change the pattern
const pattern = ""

function fuseSearch(pattern, fuse=fuse) {
    return fuse.search(pattern)
}

export default fuseSearch()