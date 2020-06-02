var str_1 = "Implemented Linear, Ridge, and Logistic regression models, Support Vector Machines (SVM), KMeans and Agglomerative Hierarchical Clustering, Principle Component Analysis (PCA), and Neural Network Classifications in Python without the use of libraries."
var str_2 = "Designed a Convoluted Neural Network (CNN) involving advanced DNN modules (i.e. convolution layers, RELU, pooling, and fully connected layers etc.) from scratch in Python and OpenCV to categorise objects present in a series of input images."
var str_3 = "Designed a Generative Adversarial Network (GAN) in Python without the use of libraries by creating competing generator and discriminator neural networks to synthesise human faces."
var str_4 = "Implemented a predictive model system in MATLAB to explain how population dynamics arise, allowing one to characterise competitive interactions between two cell populations. Tested model through a series of iterative simulations in Simulink and developed an adaptable integration-based model to transform a system of ordinary differential equations to an algebraic system of equations that can be solved for unknown parameters."
var str_5 = "Designed, developed, and implemented a complex microprocessor in VHDL boasting 8-bit signed data handling, 8 registers, 16 operations, and a 256-entry instruction memory on an FPGA board."
var str_6 = "Designed and implemented a program in Python to reverse engineer functional 3D CAD models from point clouds of data and printed parts that had been embedded with 3D anti-counterfeiting measures such as encoded QR clouds, amongst others."
var str_7 = "Developed an interactive and utterly immersive VR experience that allows users to explore and learn more about key artefacts, monuments and cities around the globe using Unity and C#."
var str_8 = "Maintained, developed, and tested a number of new and pipeline features for iOS using Objective C, XCode, Cocoa Touch, and Swift. I also developed the backend using Firebase and AppSync and partnered closely with product management as well as the UI and iOS/Android development team to continuously work on improving the iOS application by adding new functionality and developing new features consistent with the product roadmap."
var str_9 = "Integrated, built, and developed an SDK for a solid-state LiDAR sensor used to produce density elevation maps of glacier fronts from a point cloud of data. This was used to generate computational models for research by the Global Centre for Sea Level Change (GCSLC). I also Led confident, bilingual pitches after the project was selected for display at three conferences, most notably to the Vice President and Prime Minister of the UAE, HRH Sheikh Mohammed Bin Rashid al Maktoum."

var result_1 = stringDivider(str_1, 100, "<br/>");
var result_2 = stringDivider(str_2, 100, "<br/>");
var result_3 = stringDivider(str_3, 100, "<br/>");
var result_4 = stringDivider(str_4, 100, "<br/>");
var result_5 = stringDivider(str_5, 100, "<br/>");
var result_6 = stringDivider(str_6, 100, "<br/>");
var result_7 = stringDivider(str_7, 100, "<br/>");
var result_8 = stringDivider(str_8, 100, "<br/>");
var result_9 = stringDivider(str_9, 100, "<br/>");

function stringDivider(str, width, spaceReplacer) {
    if (str.length>width) {
        var p=width
        for (;p>0 && str[p]!=' ';p--) {
        }
        if (p>0) {
            var left = str.substring(0, p);
            var right = str.substring(p+1);
            return left + spaceReplacer + stringDivider(right, width, spaceReplacer);
        }
    }
    return str;
}

export default [
    ' ',
    '>   <color="yellow">imagiLabs</color>\n ', result_8,     
    ' ',
    '>   <color="yellow">GLiDAR</color>\n ', result_9,     
    ' ',
    '>   <color="yellow">General Machine Learning</color>\n ', result_1,     
    ' ',                 
    '>   <color="yellow">CNN Object Detection and Classification</color>\n ', result_2,
    ' ',
    '>   <color="yellow">GAN Human Face Synthesis</color>\n ', result_3,
    ' ',
    '>   <color="yellow">Characterisation of Competing Populations</color>\n ', result_4,
    ' ',
    '>   <color="yellow">8-Bit Microprocessor</color>\n ', result_5,
    ' ',
    '>   <color="yellow">CSAW HACK3D</color>\n ', result_6,
    ' ',
    '>   <color="yellow">World View</color>\n ', result_7,
    ' ',
 ]




