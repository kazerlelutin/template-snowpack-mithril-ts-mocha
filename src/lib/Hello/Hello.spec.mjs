import '../../../test-setup.mjs'; 
import assert from "assert"
import m from  "mithril"
import mq from "mithril-query"

  describe('#indexOf()', function() {

    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('should return -1 when the value is not present', function() {
   

      function MyComponent() {
        return {
            view: function (vnode) {
                return m("div", vnode.attrs.text)
            }
        }
    }

    
      var out = mq(MyComponent, {text: "What a wonderful day to be alive!"})

        out.should.contain("dday")

     
    });
  });