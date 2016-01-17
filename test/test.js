/*
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-01 02:43:46
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-17 19:52:58
*/

import Lab from 'lab';
import Code from 'code';
import m from './dir';

const lab = Lab.script();
lab.experiment('import directory', function () {
	lab.test('import modles', (done) => {
		Code.expect(m.model1).to.be.an.object();
		Code.expect(m.model2).to.be.an.object();
		Code.expect(m.inner.model3).to.be.an.object();
		Code.expect(m.model2.default).to.be.undefined();
		Code.expect(m.model1.name).to.be.equal('Model1');
		Code.expect(m.model1.default).to.be.equal('a');
		Code.expect(m.model2.name).to.be.equal('Model2');
		Code.expect(m.inner.model3.name).to.be.equal('Model3');
		Code.expect(m.inner.model3.default).to.be.equal('b');
		done();
	});
});

export default lab;
