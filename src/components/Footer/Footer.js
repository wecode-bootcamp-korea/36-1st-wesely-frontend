import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerBox">
          <div className="footerWebLinkBox">
            {FOOTER_DATA.webLink.map(list => {
              return (
                <div key={list.webLinkId} className="footerWebLinkTopItem">
                  {list.text}
                </div>
              );
            })}
          </div>
          <div className="footerInfoBox">
            <div className="companyInfo">
              {FOOTER_DATA.companyInfo.map(list => {
                return (
                  <div key={list.companyInfoId} className="companyInfoItem">
                    {list.text}
                  </div>
                );
              })}
            </div>
            <div className="contactCompany">
              <i className="fa-solid fa-comment" />
              {FOOTER_DATA.serviceCenterCannel.map(list => {
                return (
                  <div
                    key={list.serviceCenterInfoId}
                    className="contactCompanyChannel"
                  >
                    {list.text}
                  </div>
                );
              })}
              <div className="contactCompanyServiceNumber">
                {FOOTER_DATA.serviceCenterNumber.map(list => {
                  return (
                    <div
                      key={list.serviceCenterNumber}
                      className="contactCompanyServiceNumberItem"
                    >
                      {list.text}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="footerDocumentBox">
            <div className="companyDocument">
              {FOOTER_DATA.documentInfo.map(list => {
                return (
                  <div
                    key={list.documentInfoId}
                    className="companyDocumentItem"
                  >
                    {list.text}
                  </div>
                );
              })}
            </div>
            {FOOTER_DATA.documentReserved.map(list => {
              return <div key={list.documentReservedId}>{list.text}</div>;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

const FOOTER_DATA = {
  companyInfo: [
    { companyInfoId: 1, text: '???????????? ?????????????????????' },
    {
      companyInfoId: 2,
      text: '??????????????? ????????? ????????????96??? 20 ???????????? 5???(??????1??? 169),?????????:?????????',
    },
    {
      companyInfoId: 3,
      text: '?????????????????????: 123-45-67891, ???????????????????????????:1234-????????????-56789',
    },
    {
      companyInfoId: 4,
      text: '???????????????????????????: ????????? (chum@weselycompany.com), ????????????:1234-5678',
    },
    { companyInfoId: 5, text: 'E-mail:good@weselycompany.com' },
    { companyInfoId: 6, text: '????????????: bad@weselycompany.com' },
  ],

  serviceCenterCannel: [
    {
      serviceCenterInfoId: 8,
      text: "???????????? ?????? '??????????????????'",
    },
  ],

  serviceCenterNumber: [
    { serviceCenterNumber: 9, text: '???????????? 1833-9133' },
    { serviceCenterNumber: 10, text: '?????? 9??? ~ ?????? 6???' },
  ],

  webLink: [
    { webLinkId: 11, text: '?????????' },
    { webLinkId: 12, text: '????????????' },
    { webLinkId: 13, text: '??????????????????' },
    { webLinkId: 14, text: '?????????' },
    { webLinkId: 15, text: '????????????' },
  ],

  documentInfo: [
    { documentInfoId: 16, text: '????????????????????????' },
    { documentInfoId: 17, text: '????????????' },
    { documentInfoId: 18, text: '?????????????????????' },
    { documentInfoId: 19, text: '????????????' },
    { documentInfoId: 20, text: '??????????????????' },
    { documentInfoId: 21, text: '????????? ?????????' },
    { documentInfoId: 22, text: '???????????????????????????' },
  ],

  documentReserved: [
    {
      documentReservedId: 23,
      text: `??? 2018-2022 ${(
        <strong>WESELYCOMPANY</strong>
      )} All right reserved`,
    },
  ],
};
