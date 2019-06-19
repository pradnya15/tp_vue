<template>
  <div class="needAttention">
    <hr/>
            <div class="row">
                <div class="col-md-12">
                  <div class="table-responsive">
                    <table class="table row-border" id="dataTable" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                          <th><input type="checkbox"/></th>
                          <th>Client</th>
                          <th>Overdue Amount</th>
                          <th>Overdue Since</th>
                          <th># of Follow ups done</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>
                            <div class="client_desc">
                              <div class="rating_client">
                                <span class="good"><i class="fa fa-circle"></i></span>
                                <span><i class="fa fa-exclamation-circle"></i></span>
                              </div>
                              <div class="about_client">
                                  <span><a href="#">Pradnya</a></span>
                                  <span class="poc_client">Contact: <a href="#">Vipul Shetty</a></span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a href="#">₹5,768</a>
                          </td>
                          <td>4-Jan-19</td>
                          <td>
                            <div>
                              <div><a href="#">5</a></div>
                              <span>Last: 5 days ago</span>
                            </div>
                          </td>
                          <td>
                            <div class="btn-group">
                              <button type="button" class="btn tp-btn  btn-sm"><i class="fa fa-envelope"></i> Send Email</button>
                              <button type="button" class="btn tp-btn btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                              </button>
                              <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#">Call</a>
                                <a class="dropdown-item" href="#">Send SMS</a>
                                <a class="dropdown-item" href="#">Send WhatsApp</a>
                                <a class="dropdown-item" href="#">Action</a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="d-tbl">
                              <div class="d-tbl-cell">
                                <a href="#" class="btn btn-link starred"><i class="fa fa-star"></i></a>
                              </div>
                              <div class="d-tbl-cell">
                                  <a href="#" class="btn btn-link unimp"><i class="fa fa-bolt"></i></a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>
                            <div class="client_desc">
                              <div class="rating_client">
                                <span class="average"><i class="fa fa-circle"></i></span>
                                <span><i class="fa fa-exclamation-circle"></i></span>
                              </div>
                              <div class="about_client">
                                  <span><a href="#">Pradnya</a></span>
                                  <span class="poc_client">Contact: <a href="#">Vipul Shetty</a></span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a href="#">₹5,768</a>
                          </td>
                          <td>4-Jan-19</td>
                          <td>
                            <div>
                              <div><a href="#">5</a></div>
                              <span>Last: 5 days ago</span>
                            </div>
                          </td>
                          <td>
                            <div class="btn-group">
                              <button type="button" class="btn tp-btn  btn-sm"><i class="fa fa-sms"></i> Send SMS</button>
                              <button type="button" class="btn tp-btn btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                              </button>
                              <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#">Call</a>
                                <a class="dropdown-item" href="#">Send Email</a>
                                <a class="dropdown-item" href="#">Send WhatsApp</a>
                                <a class="dropdown-item" href="#">Action</a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="d-tbl">
                              <div class="d-tbl-cell">
                                <a href="#" class="btn btn-link unstarred"><i class="fa fa-star"></i></a>
                              </div>
                              <div class="d-tbl-cell">
                                  <a href="#" class="btn btn-link imp"><i class="fa fa-bolt"></i></a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>
                            <div class="client_desc">
                              <div class="rating_client">
                                <span class="bad"><i class="fa fa-circle"></i></span>
                                <span><i class="fa fa-exclamation-circle"></i></span>
                              </div>
                              <div class="about_client">
                                  <span><a href="#">Pradnya</a></span>
                                  <span class="poc_client">Contact: <a href="#" class="no_contact">Add</a></span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a href="#">₹5,768</a>
                          </td>
                          <td>4-Jan-19</td>
                          <td>
                            <div>
                              <div><a href="#">5</a></div>
                              <span>Last: 5 days ago</span>
                            </div>
                          </td>
                          <td>
                            <div class="btn-group">
                              <button type="button" class="btn tp-btn btn-block btn-sm"><i class="fa fa-phone"></i> Call</button>
                              <button type="button" class="btn tp-btn btn-sm dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                              </button>
                              <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#">Send Email</a>
                                <a class="dropdown-item" href="#">Send SMS</a>
                                <a class="dropdown-item" href="#">Send WhatsApp</a>
                                <a class="dropdown-item" href="#">Action</a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="d-tbl">
                              <div class="d-tbl-cell">
                                <a href="#" class="btn btn-link starred"><i class="fa fa-star"></i></a>
                              </div>
                              <div class="d-tbl-cell">
                                  <a href="#" class="btn btn-link unimp"><i class="fa fa-bolt"></i></a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
  </div>
</template>

<script>
export default {
  name: 'needAttention'
}
</script>


<style >

</style>
