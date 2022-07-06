import React from "react";
import "./NewsAndAnnouncements.css";
export default function NewsAndAnnouncements() {
  return (
    <div className="NewsAndAnnouncements-Container">
      <div className="NnA-Banner">
        <div className="NnA-Banner-Content">
          <h1 className="section-title">News And Announcements</h1>
          <p className="section-para">Stay tune to Kalpataru for latest news</p>
        </div>
        <div className="NnA-Banner-Image">
          <img src="/images/NewsBannerImage.png" alt="" />
        </div>
      </div>
      <div className="IPO-Container">
        <div className="IPO-Header">
          <h1 className="section-title">IPO</h1>
        </div>
        <div className="IPO-Col">
          <h3 className="section-title2">
            Aether Industries IPO subscribed 49% on Day 2
          </h3>
          <div className="IPO-row">
            <div className="IPO-row-image">
              <img src="/images/IPO-row-image.jpg" alt="" />
            </div>
            <div className="IPO-row-Content">
              <p className="section-para">
                The initial public offering ipo of Aether received a muted
                response from the investor from the second day of the bidding
                process
              </p>
              <p className="section-para">
                The issue kicked off for bidding on tuesday may 24. and would
                remain open till thrusday may 26 the company is selling its
                share in the range of Rs 610-642 apiece to raise Rs 808 cr
                through primary route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Top-Gainer-Container">
        <div className="Top-Gainer-Header">
          <h1 className="section-title">Top Gainer of the last week</h1>
        </div>
        <div className="Top-Gainer-Col">
          <div className="Col-Grid-Row">
            <h3 className="section-title2">Name</h3>
            <h3 className="section-title2">LTP</h3>
            <h3 className="section-title2">Change</h3>
          </div>
          <div className="Col-Grid-Row">
            <p className="section-para">Vivid Mercantile Ltd.</p>
            <p className="section-para">44.3</p>
            <p className="section-para">64.7</p>
            <p className="section-para">Vivid Mercantile Ltd.</p>
            <p className="section-para">44.3</p>
            <p className="section-para">64.7</p>
            <p className="section-para">Vivid Mercantile Ltd.</p>
            <p className="section-para">44.3</p>
            <p className="section-para">64.7</p>
          </div>
        </div>
      </div>
    </div>
  );
}
