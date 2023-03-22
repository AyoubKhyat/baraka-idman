// Variables Declarations
var baseUrl = `http://${location.host}/`;

// GET a SUNCTUM CSRF
$(document).ready(function(){
  axios.get('/sanctum/csrf-cookie');
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });
});

// GET Function with Axios
function getAllData(endUrl,fctOutput, dataObject = {}) {
    axios
      .get(baseUrl+endUrl, {
        // timeout: 5000,
        params:dataObject,
      })
      .then(res => fctOutput(res.data, dataObject))
      .catch(err => {
        console.log(err);
        fctOutput(err.response.data);
    });
}

// POST Function Axois
function addData(endUrl,dataObject,fctOutput) {
    axios
      .post(baseUrl+endUrl, dataObject)
      .then(res => fctOutput(res.data))
      .catch(err => {
        fctOutput(err.response.data);
    });
}

// PUT Function Axois 
function updateData(endUrl,dataObject,fctOutput) {
    axios
      .put(baseUrl+endUrl, dataObject)
      .then(res => fctOutput(res.data))
      .catch(err => {
        fctOutput(err.response.data);
    });
}

// DELETE Function Axois
function deleteData(endUrl,fctOutput) {
    axios
      .delete(baseUrl+endUrl)
      .then(res => fctOutput(res.data))
      .catch(err => {
        fctOutput(err.response.data);
    });
}

// To upload files with Axois
function uploading(endUrl, dataObject, fctOutput) {
  axios({
    method: 'post',
    url: baseUrl + endUrl,
    data: dataObject,
  })
    .then(res => fctOutput(res.data))
    .catch(err => {
      fctOutput(err.response.data);
    });
}
// GET Function with Axios (For Dashboard)
function getAllDataForDashboard(endUrl, dataObject) {
  try {
    let nbBeneficiairesObject = null;
    $.ajax({
      type: "get",
      url: baseUrl + endUrl,
      data: dataObject,
      async:false,
      success: function (response) {
        nbBeneficiairesObject = response
      },
      error: function (error) {
        console.log(error);
      },
    });
    return nbBeneficiairesObject;
  } catch (error) {
    console.log(error);
  }
}
