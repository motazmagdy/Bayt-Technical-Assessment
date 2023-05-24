// 2. Write a function called contains that searches for a value in a nested object.
//  It returns true if the object contains that value.

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};
function contains(obj, value) {
  var nested;
  var objEntries;
  do {
    objEntries = Object.entries(obj);
    if (objEntries.length == 1) {
      nested = objEntries[0][1];
      if (objEntries[0][0] == value || objEntries[0][1] == value) {
        return true;
      }
      obj = objEntries[0][1];
    } else if (objEntries.length > 1) {
      for (var i = 0; i <= objEntries.length+1; i++) {
        if (i === objEntries.length) {
          return false
        } else if (typeof objEntries[i][1] == "object") {
          nested = objEntries[i][1];
          obj = objEntries[i][1];
          break;
        } else if (objEntries[i][0] == value || objEntries[i][1] == value) {
          return true;
        }
      }
    }
  } while (typeof nested == "object");
  return false;
}

contains(nestedObject, "foo2")
