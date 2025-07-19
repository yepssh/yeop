// Past Records data
const pastRecordsData = {
    'clients': {
        title: 'Happy Clients',
        headerImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
        content: `
            <h3 class="mb-4">Our Happy Clients</h3>
            
            <p class="lead mb-5">Over the years, we've had the privilege of working with amazing clients across various industries. Here's a glimpse into our client relationships and success stories.</p>
            
            <div class="row mb-5">
                <div class="col-md-4 text-center mb-4">
                    <div class="record-icon mb-3">
                        <i class="bi-people-fill"></i>
                    </div>
                    <h3 class="record-number mb-2">500+</h3>
                    <h5 class="record-title mb-3">Total Clients Served</h5>
                </div>
                <div class="col-md-4 text-center mb-4">
                    <div class="record-icon mb-3">
                        <i class="bi-star-fill"></i>
                    </div>
                    <h3 class="record-number mb-2">4.9/5</h3>
                    <h5 class="record-title mb-3">Average Client Rating</h5>
                </div>
                <div class="col-md-4 text-center mb-4">
                    <div class="record-icon mb-3">
                        <i class="bi-arrow-repeat"></i>
                    </div>
                    <h3 class="record-number mb-2">95%</h3>
                    <h5 class="record-title mb-3">Client Retention Rate</h5>
                </div>
            </div>
            
            <h5 class="mb-3">Client Industries</h5>
            <div class="row mb-4">
                <div class="col-md-6">
                    <ul class="list-unstyled">
                        <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i>Financial Services (120+ clients)</li>
                        <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i>Healthcare (85+ clients)</li>
                        <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i>Technology (95+ clients)</li>
                        <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i>Retail & E-commerce (75+ clients)</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <ul class="list-unstyled">
                        <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i>Manufacturing (60+ clients)</li>
                        <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i>Non-profit (45+ clients)</li>
                        <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i>Education (35+ clients)</li>
                        <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i>Real Estate (30+ clients)</li>
                    </ul>
                </div>
            </div>
            
            <h5 class="mb-3">Client Testimonials</h5>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <blockquote class="p-4 bg-light rounded">
                        "Exceptional service and results. They truly understand our business needs."
                        <footer class="blockquote-footer mt-2">John Smith, <cite>CEO, TechCorp</cite></footer>
                    </blockquote>
                </div>
                <div class="col-md-6 mb-4">
                    <blockquote class="p-4 bg-light rounded">
                        "Professional, reliable, and always deliver on time. Highly recommended!"
                        <footer class="blockquote-footer mt-2">Sarah Johnson, <cite>CFO, FinanceFirst</cite></footer>
                    </blockquote>
                </div>
            </div>
        `
    },
    'projects': {
        title: 'Projects Completed',
        headerImage: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
        content: `
            <h3 class="mb-4">Projects Completed</h3>
            
            <p class="lead mb-5">We've successfully completed over 1000 projects across various domains. Each project represents our commitment to excellence and client satisfaction.</p>
            
            <div class="row mb-5">
                <div class="col-md-4 text-center mb-4">
                    <div class="record-icon mb-3">
                        <i class="bi-briefcase-fill"></i>
                    </div>
                    <h3 class="record-number mb-2">1000+</h3>
                    <h5 class="record-title mb-3">Total Projects</h5>
                </div>
                <div class="col-md-4 text-center mb-4">
                    <div class="record-icon mb-3">
                        <i class="bi-clock-fill"></i>
                    </div>
                    <h3 class="record-number mb-2">98%</h3>
                    <h5 class="record-title mb-3">On-Time Delivery</h5>
                </div>
                <div class="col-md-4 text-center mb-4">
                    <div class="record-icon mb-3">
                        <i class="bi-currency-dollar"></i>
                    </div>
                    <h3 class="record-number mb-2">95%</h3>
                    <h5 class="record-title mb-3">Within Budget</h5>
                </div>
            </div>
            
            <h5 class="mb-3">Project Categories</h5>
            <div class="row mb-4">
                <div class="col-md-6">
                    <ul class="list-unstyled">
                        <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i>Accounting & Bookkeeping (350+ projects)</li>
                        <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i>Tax Preparation & Planning (280+ projects)</li>
                        <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i>Management Consulting (220+ projects)</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <ul class="list-unstyled">
                        <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i>HR Services (180+ projects)</li>
                        <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i>Financial Analysis (120+ projects)</li>
                        <li class="mb-2"><i class="bi-check-circle-fill text-primary me-2"></i>Business Strategy (85+ projects)</li>
                    </ul>
                </div>
            </div>
            
            <h5 class="mb-3">Project Success Metrics</h5>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="p-4 bg-light rounded">
                        <h6>Average Project Duration</h6>
                        <p class="mb-0">3.2 months (ranging from 1 week to 18 months)</p>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="p-4 bg-light rounded">
                        <h6>Client Satisfaction Score</h6>
                        <p class="mb-0">4.8/5.0 based on post-project surveys</p>
                    </div>
                </div>
            </div>
        `
    },
    'awards': {
        title: 'Awards Won',
        headerImage: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
        content: `
            <h3 class="mb-4">Awards & Recognition</h3>
            
            <p class="lead mb-5">Our commitment to excellence has been recognized by industry leaders and professional organizations. Here are some of our notable achievements.</p>
            
            <div class="row mb-5">
                <div class="col-md-4 text-center mb-4">
                    <div class="record-icon mb-3">
                        <i class="bi-trophy-fill"></i>
                    </div>
                    <h3 class="record-number mb-2">25+</h3>
                    <h5 class="record-title mb-3">Total Awards</h5>
                </div>
                <div class="col-md-4 text-center mb-4">
                    <div class="record-icon mb-3">
                        <i class="bi-award-fill"></i>
                    </div>
                    <h3 class="record-number mb-2">5</h3>
                    <h5 class="record-title mb-3">Industry Excellence Awards</h5>
                </div>
                <div class="col-md-4 text-center mb-4">
                    <div class="record-icon mb-3">
                        <i class="bi-star-fill"></i>
                    </div>
                    <h3 class="record-number mb-2">10</h3>
                    <h5 class="record-title mb-3">Client Choice Awards</h5>
                </div>
            </div>
            
            <h5 class="mb-3">Recent Awards (2023-2024)</h5>
            <div class="row mb-4">
                <div class="col-12">
                    <ul class="list-unstyled">
                        <li class="mb-3">
                            <div class="d-flex align-items-center">
                                <i class="bi-trophy-fill text-warning me-3" style="font-size: 24px;"></i>
                                <div>
                                    <h6 class="mb-1">Best Accounting Firm 2024</h6>
                                    <p class="mb-0 text-muted">National Business Excellence Awards</p>
                                </div>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="d-flex align-items-center">
                                <i class="bi-award-fill text-primary me-3" style="font-size: 24px;"></i>
                                <div>
                                    <h6 class="mb-1">Innovation in Financial Services</h6>
                                    <p class="mb-0 text-muted">FinTech Innovation Awards 2024</p>
                                </div>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="d-flex align-items-center">
                                <i class="bi-star-fill text-success me-3" style="font-size: 24px;"></i>
                                <div>
                                    <h6 class="mb-1">Client Satisfaction Excellence</h6>
                                    <p class="mb-0 text-muted">Professional Services Awards 2023</p>
                                </div>
                            </div>
                        </li>
                        <li class="mb-3">
                            <div class="d-flex align-items-center">
                                <i class="bi-people-fill text-info me-3" style="font-size: 24px;"></i>
                                <div>
                                    <h6 class="mb-1">Best Workplace Culture</h6>
                                    <p class="mb-0 text-muted">HR Excellence Awards 2023</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
            <h5 class="mb-3">Professional Certifications</h5>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="p-4 bg-light rounded">
                        <h6>CPA Certified</h6>
                        <p class="mb-0">All our senior accountants are Certified Public Accountants</p>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="p-4 bg-light rounded">
                        <h6>ISO 9001:2015</h6>
                        <p class="mb-0">Quality Management System certification</p>
                    </div>
                </div>
            </div>
        `
    },
    'experience': {
        title: 'Years of Experience',
        headerImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
        content: `
            <h3 class="mb-4">Our Experience Journey</h3>
            
            <p class="lead mb-5">With over 10 years in the industry, we've built a wealth of experience and expertise that benefits every client we serve.</p>
            
            <div class="row mb-5">
                <div class="col-md-4 text-center mb-4">
                    <div class="record-icon mb-3">
                        <i class="bi-calendar-check-fill"></i>
                    </div>
                    <h3 class="record-number mb-2">10+</h3>
                    <h5 class="record-title mb-3">Years in Business</h5>
                </div>
                <div class="col-md-4 text-center mb-4">
                    <div class="record-icon mb-3">
                        <i class="bi-graph-up-arrow"></i>
                    </div>
                    <h3 class="record-number mb-2">150%</h3>
                    <h5 class="record-title mb-3">Growth Rate</h5>
                </div>
                <div class="col-md-4 text-center mb-4">
                    <div class="record-icon mb-3">
                        <i class="bi-building"></i>
                    </div>
                    <h3 class="record-number mb-2">3</h3>
                    <h5 class="record-title mb-3">Office Locations</h5>
                </div>
            </div>
            
            <h5 class="mb-3">Our Timeline</h5>
            <div class="timeline-container mb-5">
                <div class="row">
                    <div class="col-12">
                        <div class="timeline-item mb-4">
                            <div class="d-flex">
                                <div class="timeline-year me-4">
                                    <strong>2014</strong>
                                </div>
                                <div>
                                    <h6>Company Founded</h6>
                                    <p>Started as a small accounting firm with 3 employees</p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item mb-4">
                            <div class="d-flex">
                                <div class="timeline-year me-4">
                                    <strong>2016</strong>
                                </div>
                                <div>
                                    <h6>First Major Client</h6>
                                    <p>Secured our first Fortune 500 client, marking a significant milestone</p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item mb-4">
                            <div class="d-flex">
                                <div class="timeline-year me-4">
                                    <strong>2018</strong>
                                </div>
                                <div>
                                    <h6>Service Expansion</h6>
                                    <p>Added HR services and management consulting to our portfolio</p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item mb-4">
                            <div class="d-flex">
                                <div class="timeline-year me-4">
                                    <strong>2020</strong>
                                </div>
                                <div>
                                    <h6>Digital Transformation</h6>
                                    <p>Implemented cloud-based solutions and remote service capabilities</p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item mb-4">
                            <div class="d-flex">
                                <div class="timeline-year me-4">
                                    <strong>2022</strong>
                                </div>
                                <div>
                                    <h6>National Recognition</h6>
                                    <p>Received multiple industry awards and expanded to 3 office locations</p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item mb-4">
                            <div class="d-flex">
                                <div class="timeline-year me-4">
                                    <strong>2024</strong>
                                </div>
                                <div>
                                    <h6>Continued Growth</h6>
                                    <p>Now serving 500+ clients with a team of 50+ professionals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <h5 class="mb-3">Experience Highlights</h5>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="p-4 bg-light rounded">
                        <h6>Industry Expertise</h6>
                        <p class="mb-0">Deep knowledge across 15+ industries with specialized teams for each sector</p>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="p-4 bg-light rounded">
                        <h6>Technology Leadership</h6>
                        <p class="mb-0">Early adopters of cloud technology and automation in professional services</p>
                    </div>
                </div>
            </div>
        `
    }
};

// Load record data when page loads
$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const recordType = urlParams.get('type');
    
    if (recordType && pastRecordsData[recordType]) {
        loadRecordData(pastRecordsData[recordType]);
    } else {
        // Show all records if no specific type is selected
        showAllRecords();
    }
});

function loadRecordData(record) {
    // Update page title
    document.title = `${record.title} - Past Records`;
    
    // Update header
    $('#record-title').text(record.title);
    $('#record-header-image').attr('src', record.headerImage).attr('alt', record.title);
    
    // Update content
    $('#record-content').html(record.content);
}

function showAllRecords() {
    $('#record-title').text('Our Track Record');
    $('#record-content').html(`
        <h3 class="mb-4">Our Achievements</h3>
        <p class="mb-5">Explore our detailed track record and achievements across different areas of our business.</p>
        
        <div class="row">
            <div class="col-lg-6 col-md-6 col-12 mb-4">
                <div class="record-card text-center h-100">
                    <div class="record-icon mb-3">
                        <i class="bi-people-fill"></i>
                    </div>
                    <h3 class="record-number mb-2">500+</h3>
                    <h5 class="record-title mb-3">Happy Clients</h5>
                    <p class="record-description">Satisfied clients across various industries worldwide</p>
                    <a href="past-records.html?type=clients" class="btn btn-sm custom-btn">View Details</a>
                </div>
            </div>
            
            <div class="col-lg-6 col-md-6 col-12 mb-4">
                <div class="record-card text-center h-100">
                    <div class="record-icon mb-3">
                        <i class="bi-briefcase-fill"></i>
                    </div>
                    <h3 class="record-number mb-2">1000+</h3>
                    <h5 class="record-title mb-3">Projects Completed</h5>
                    <p class="record-description">Successfully delivered projects on time and within budget</p>
                    <a href="past-records.html?type=projects" class="btn btn-sm custom-btn">View Details</a>
                </div>
            </div>
            
            <div class="col-lg-6 col-md-6 col-12 mb-4">
                <div class="record-card text-center h-100">
                    <div class="record-icon mb-3">
                        <i class="bi-trophy-fill"></i>
                    </div>
                    <h3 class="record-number mb-2">25+</h3>
                    <h5 class="record-title mb-3">Awards Won</h5>
                    <p class="record-description">Industry recognition for excellence and innovation</p>
                    <a href="past-records.html?type=awards" class="btn btn-sm custom-btn">View Details</a>
                </div>
            </div>
            
            <div class="col-lg-6 col-md-6 col-12 mb-4">
                <div class="record-card text-center h-100">
                    <div class="record-icon mb-3">
                        <i class="bi-calendar-check-fill"></i>
                    </div>
                    <h3 class="record-number mb-2">10+</h3>
                    <h5 class="record-title mb-3">Years Experience</h5>
                    <p class="record-description">Decade of expertise in delivering quality solutions</p>
                    <a href="past-records.html?type=experience" class="btn btn-sm custom-btn">View Details</a>
                </div>
            </div>
        </div>
    `);
}