import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { UserContext } from "../Context/usercontext";

const UserProfile = () => {
  const { user: contextUser } = useContext(UserContext);
  const userType = contextUser?.userType;

    const LandlordProfile = ({ userType }) => {
      return (
        <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">
              <div className="div-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddeab38d-74da-4c95-acd9-be0067671176?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                  className="img"
                />
                <div className="div-6">
                  <div className="div-7">walrus</div>
                  <div className="div-8">RENTING GROUP</div>
                </div>
              </div>
              <div className="div-9">
                <div className="div-10">
                  <div className="div-11">
                    <div className="div-12">Where</div>
                    <div className="div-13">Find your new home</div>
                  </div>
                  <div className="div-14">
                    <div className="div-15" />
                    <div className="div-16">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f90eb722-4181-42b4-a079-270080eb9086?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                        className="img-2"
                      />
                      <div className="div-17">Beds</div>
                    </div>
                    <div className="div-18" />
                    <div className="div-19">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b082446-d2f5-4e48-b603-932979b8ce67?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                        className="img-3"
                      />
                      <div className="div-20">Bath</div>
                    </div>
                    <div className="div-21" />
                    <div className="div-22">
                      <div className="div-23">Price Range</div>
                      <div className="div-24">Min - Max</div>
                    </div>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/208cfef5-be6b-4b70-8d43-508e121ee959?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                  className="img-4"
                />
              </div>
              <div className="div-25">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfab9ffe-dd26-486d-8007-a8f6aef1f86d?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                  className="img-5"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a52db0d6-39c2-40ed-95cf-e218a286d5a9?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                  className="img-6"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/05cf0575-b7dc-43aa-9e4b-e8de41df93b5?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                  className="img-7"
                />
                <div className="div-26">Logout</div>
              </div>
            </div>
            <div className="div-27">Additional Filters</div>
          </div>
        </div>
        <div className="div-28">
          <div className="div-29">
            <div className="div-30">
              <div className="column">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/becf8735-3f4f-4d04-90d5-b93390972535?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/becf8735-3f4f-4d04-90d5-b93390972535?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/becf8735-3f4f-4d04-90d5-b93390972535?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/becf8735-3f4f-4d04-90d5-b93390972535?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/becf8735-3f4f-4d04-90d5-b93390972535?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/becf8735-3f4f-4d04-90d5-b93390972535?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/becf8735-3f4f-4d04-90d5-b93390972535?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/becf8735-3f4f-4d04-90d5-b93390972535?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                  className="img-8"
                />
              </div>
              <div className="column-2">
                <div className="div-31">
                  <div className="div-32">Teressa Mother</div>
                  <div className="div-33">65 years old</div>
                  <div className="div-34">
                    I’ve got a nice property for you to stay at. Looking for
                    renters.
                    <br />
                    <br />
                    <br />
                    <br />
                    #landlord
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-35">
          <div className="div-36">
            <div className="div-37">
              <div className="div-38">My properties</div>
              <div className="div-39">Create Property</div>
            </div>
            <div className="div-40">
              <div className="div-41">
                <div className="column-3">
                  <div className="div-42">
                    <div className="div-43">
                      <div className="column-4">
                        <div className="div-44">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/81190003-bcf9-4917-b384-bca6b0cb3e0c?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/81190003-bcf9-4917-b384-bca6b0cb3e0c?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81190003-bcf9-4917-b384-bca6b0cb3e0c?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/81190003-bcf9-4917-b384-bca6b0cb3e0c?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/81190003-bcf9-4917-b384-bca6b0cb3e0c?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81190003-bcf9-4917-b384-bca6b0cb3e0c?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/81190003-bcf9-4917-b384-bca6b0cb3e0c?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/81190003-bcf9-4917-b384-bca6b0cb3e0c?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                            className="img-9"
                          />
                          <div className="div-45">$899.00</div>
                          <div className="div-46">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/47c790ac-cc64-42ff-8ab8-f4e5b848c965?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                              className="img-10"
                            />
                            <div className="div-47" />
                          </div>
                        </div>
                      </div>
                      <div className="column-5">
                        <div className="div-48">
                          <div className="div-49">Downtown</div>
                          <div className="div-50">2,000 sq/ft</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column-6">
                  <div className="div-51">
                    <div className="div-52">
                      <div className="column-7">
                        <div className="div-53">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/230ddf74-a20f-4129-b17f-918d04a8d096?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/230ddf74-a20f-4129-b17f-918d04a8d096?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/230ddf74-a20f-4129-b17f-918d04a8d096?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/230ddf74-a20f-4129-b17f-918d04a8d096?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/230ddf74-a20f-4129-b17f-918d04a8d096?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/230ddf74-a20f-4129-b17f-918d04a8d096?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/230ddf74-a20f-4129-b17f-918d04a8d096?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/230ddf74-a20f-4129-b17f-918d04a8d096?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                            className="img-11"
                          />
                          <div className="div-54">$899.00</div>
                          <div className="div-55">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9006ad0f-fa47-4cf9-9ebc-905ecba1eb15?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                              className="img-12"
                            />
                            <div className="div-56" />
                          </div>
                        </div>
                      </div>
                      <div className="column-8">
                        <div className="div-57">
                          <div className="div-58">Downtown</div>
                          <div className="div-59">2,000 sq/ft</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column-9">
                  <div className="div-60">
                    <div className="div-61">
                      <div className="column-10">
                        <div className="div-62">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f6847ebc-ccb7-4f92-9c36-795c87ae9375?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6847ebc-ccb7-4f92-9c36-795c87ae9375?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6847ebc-ccb7-4f92-9c36-795c87ae9375?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6847ebc-ccb7-4f92-9c36-795c87ae9375?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6847ebc-ccb7-4f92-9c36-795c87ae9375?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6847ebc-ccb7-4f92-9c36-795c87ae9375?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6847ebc-ccb7-4f92-9c36-795c87ae9375?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6847ebc-ccb7-4f92-9c36-795c87ae9375?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                            className="img-13"
                          />
                          <div className="div-63">$899.00</div>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7076c799-9896-4cad-939e-0ac127bb57b5?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                            className="img-14"
                          />
                        </div>
                      </div>
                      <div className="column-11">
                        <div className="div-64">
                          <div className="div-65">Downtown</div>
                          <div className="div-66">2,000 sq/ft</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    };

    const RenterProfile = ({ userType }) => {
      return (
        <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">
              <div className="div-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e49d552e-e1b1-4ccb-9693-28c8fb394c77?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                  className="img"
                />
                <div className="div-6">
                  <div className="div-7">walrus</div>
                  <div className="div-8">RENTING GROUP</div>
                </div>
              </div>
              <div className="div-9">
                <div className="div-10">
                  <div className="div-11">
                    <div className="div-12">Where</div>
                    <div className="div-13">Find your new home</div>
                  </div>
                  <div className="div-14">
                    <div className="div-15" />
                    <div className="div-16">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ff0f5e6-ec9f-4428-a325-1feca2ef295a?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                        className="img-2"
                      />
                      <div className="div-17">Beds</div>
                    </div>
                    <div className="div-18" />
                    <div className="div-19">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/323360cc-76e1-421e-8741-f5745d4bc4d4?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                        className="img-3"
                      />
                      <div className="div-20">Bath</div>
                    </div>
                    <div className="div-21" />
                    <div className="div-22">
                      <div className="div-23">Price Range</div>
                      <div className="div-24">Min - Max</div>
                    </div>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1013ec6-24c4-463a-b277-26e75ed8b1ad?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                  className="img-4"
                />
              </div>
              <div className="div-25">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/77c185f1-209e-4408-977d-7ad682c95153?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                  className="img-5"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a083fdbc-4bc0-4e2c-b21e-f3096a1a98c9?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                  className="img-6"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3047a030-96c4-4eb3-84c7-dcf02cbfb0ca?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                  className="img-7"
                />
                <div className="div-26">Logout</div>
              </div>
            </div>
            <div className="div-27">Additional Filters</div>
          </div>
        </div>
        <div className="div-28">
          <div className="div-29">
            <div className="div-30">
              <div className="column">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9755a605-1ff9-4ad5-a5a3-dcaba80896a9?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9755a605-1ff9-4ad5-a5a3-dcaba80896a9?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9755a605-1ff9-4ad5-a5a3-dcaba80896a9?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9755a605-1ff9-4ad5-a5a3-dcaba80896a9?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9755a605-1ff9-4ad5-a5a3-dcaba80896a9?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9755a605-1ff9-4ad5-a5a3-dcaba80896a9?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9755a605-1ff9-4ad5-a5a3-dcaba80896a9?apiKey=afe4f9d270b143e39e8b35be5ef69cea&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9755a605-1ff9-4ad5-a5a3-dcaba80896a9?apiKey=afe4f9d270b143e39e8b35be5ef69cea&"
                  className="img-8"
                />
              </div>
              <div className="column-2">
                <div className="div-31">
                  <div className="div-32">Lulu Lemon</div>
                  <div className="div-33">22 years old</div>
                  <div className="div-34">
                    I am a short term renter looking for a home with a near by
                    Pilates studio.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    #renter
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-35">
          <div className="div-36">
            <div className="column-3">
              <div className="div-37">
                <div className="div-38">Employment</div>
                <div className="div-39">
                  <div className="div-40">Full Time Student</div>
                  <div className="div-41">University of Calgary</div>
                </div>
                <div className="div-42">Engineering</div>
              </div>
            </div>
            <div className="column-4">
              <div className="div-43">
                <div className="div-44">Looking for</div>
                <div className="div-45">
                  <div className="div-46">Room to Rent</div>
                  <div className="div-47">Short Term</div>
                  <div className="div-48">Near University</div>
                </div>
                <div className="div-49">
                  <div className="div-50">Access to Transit</div>
                  <div className="div-51">Ensuite Laundry</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    };
}
export default UserProfile;