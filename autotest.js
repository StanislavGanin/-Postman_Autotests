// autotest for method api.hh.ru/employers/5008932


pm.test("Мой первый автотест", function () {
    pm.response.to.have.status(200);
});

pm.test("Body matches string Яндекс.Практикум", function () {
    pm.expect(pm.response.text()).to.include("Яндекс.Практикум");
});

pm.test("Response time is less than 50ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});


//autotest for method https://api.hh.ru/employers?text=яндекс+практикум

pm.test("Мой первый автотест", function () {
    pm.response.to.have.status(200);
});

pm.test("Body matches string Яндекс.Практикум", function () {
    pm.expect(pm.response.text()).to.include("Яндекс.Практикум");
});

pm.test("Response time is less than 50ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});

