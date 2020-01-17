import React from 'react';
import DesignNavi from '../design-navi';

const Panels = () => {

    return (
        <div className="grid-display">
        <DesignNavi />
            <div className="primary-container">
                <div className="page-heading">
                    <h1>Panels</h1>
                    <p className="article-section">
                        A panel is defined as a container to be used for providing content through an alternative method to a full page view.
                        It can be used for providing a simple form, summary information or supporting content.
                    </p>
                   
                    
                </div>
                <div className="page-content">
                    <h2>Elements</h2>
                    <div>
                    <b>[example of panel]</b>
                    </div>
                    <p className="article-section">
                        A panel can contain a variety of different elements based upon the usage. To focus on a consistent approach to panels a number of elements are required to be present in each panel.

                  </p>
                  <p className="article-section">
                    <h3>Title</h3>
                    <p>A title must be provided to assist the user in identifying the use case for the panel. This must be a descriptive title that effectively summarises the content displayed. A sub title can be used if required.
                     <br />   
                    <b>[example of panel title]</b>
                    </p>
                  </p>
                  <p className="article-section">
                      <h3>Close / Cancel</h3>
                      <p>A panel must include a close action placed within the heading, this provides the user with the ability to close the panel without having to hunt for a "cancel" or "close" button within the panel. 
                          This is to be provided using a cancel icon with an appropriate tooltip.
                          <br /> 
                          <b>[example of close icon]</b>
                      </p>
                  </p>
                  <p className="article-section">
                      <h3>Content</h3>
                      <p> The content being displayed within the panel should use existing concepts for padding, style & hierarchy.
                        
                        
                      </p>
                  </p>
                </div>
                <div className="page-content">
                    <h2>Usage</h2>
                    <p className="article-section">
                        
                    </p>
                </div>
                <div className="page-content">
                    <h2>Positioning</h2>
                    <p className="article-section">
                        
                    </p>
                </div>
                <div className="page-content">
                    <h2>Animation</h2>
                    <p className="article-section">
                        
                    </p>
                </div>
                <div className="page-content">
                    <h2>Notifications</h2>
                    <p className="article-section">
                        
                    </p>
                </div>
                <div className="page-content">
                    <h2>Unsaved Content</h2>
                    <p className="article-section">
                        
                    </p>
                </div>
                
            </div>
        </div>
    );
}

export default Panels;