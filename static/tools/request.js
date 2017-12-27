import request from 'superagent';

const domain = "";

var req;

var fetch = {
  get : (uri) => {
    return new Promise((resolve, reject) => {
      request.get(domain + uri)
        .query({_: Math.random()})
        .timeout({
          deadline: 15000,
        })
        .end((err, res) => {
          if(err) {
            reject(err);
            return;
          }

          resolve(res);
        })
    });
  }
};


const fetchData = {
  get: (uri, callback) => {
    req = request.get(domain + uri)
      .query({_: Math.random()})
      .timeout({
        deadline: 15000,
      })
      .end((err, res) => {
        if (err) {
          let msg = "网络错误，请稍后重试";
          if (res && res.message) {
            msg = res.message;
          }

          alert(msg);
        }

        callback(err, res);
      });
    return req;
  },
  post: (uri, params, callback) => {
    req = request.post(domain + uri)
      .send(params)
      .type('form')
      .timeout({
        deadline: 15000,
      })
      .end((err, res) => {
        if (err) {
          let msg = "网络错误，请稍后重试";
          if (res && res.message) {
            msg = res.message;
          }

          alert(msg);
        }

        callback(err, res);
      });

    return req;
  }
};

export {
  fetchData,
  domain,
  fetch
};
