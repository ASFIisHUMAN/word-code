import React, { useState, useEffect, useRef } from 'react';

const CodeToWord = () => {
    const [output, setOutput] = useState('');
    const [input1, setInput1] = useState('');
    const [copied, setCopied] = useState(false);
    const [typedOutput, setTypedOutput] = useState('');
    const [decoding, setDecoding] = useState(false);
    const textareaRef = useRef(null);
    
    useEffect(() => {
        adjustTextareaRows(); // Initially adjust textarea rows
    }, []);

    useEffect(() => {
        window.addEventListener('resize', adjustTextareaRows); // Adjust textarea rows on window resize
        return () => {
            window.removeEventListener('resize', adjustTextareaRows);
        };
    }, []);

    useEffect(() => {
        adjustTextareaRows(); // Adjust textarea rows when input1 changes
    }, [input1]);

    const codetoword = (user_input) => {
        const bt = "`";
        const a = `^$the quick=b40wn*,fox!j6mps@2v1r/789-lazy:d3g._5?+\n"{(;)]&[%}\\<#>'|~${bt}`;
        let result;
        // Assigning variables similar to Python code
        let b4001 =a[0], b44 =a[0], b79 = a[0];
        let b31 =a[1], b21 =a[1], b68 = a[1];
        let b002 =a[2], b94 =a[2], b008 = a[2];
        let b09318 =a[3], b348 =a[3], b9821 = a[3];
        let b092 =a[4], b787 =a[4], b119 = a[4];
        let b883 =a[5], b104 =a[5], b311 = a[5];
        let b305 =a[6], b206 =a[6], b101 = a[6];
        let b193 =a[7], b213 =a[7], b29 = a[7];
        let b3 =a[8], b201 =a[8], b98 = a[8];
        let b14 =a[9], b564 =a[9], b863 = a[9];
        let b81 =a[10], b27 =a[10], b083 = a[10];
        let b404 =a[11], b90 =a[11], b37 = a[11];
        let b303 =a[12], b834 =a[12], b207 = a[12];
        let b869 =a[13], b062 =a[13], b004 = a[13];
        let b313 =a[14], b241 =a[14], b704 = a[14];
        let b23 =a[15], b009 =a[15], b603 = a[15];
        let b77 =a[16], b09 =a[16], b5 = a[16];
        let b102 =a[17], b69 =a[17], b191 = a[17];
        let b601 =a[18], b007 =a[18], b6038 = a[18];
        let b76 =a[19], b32 =a[19], b6 = a[19];
        let b093 =a[20], b46 =a[20], b39 = a[20];
        let b473 =a[21], b97 =a[21], b702 = a[21];
        let b659 =a[22], b28 =a[22], b35 = a[22];
        let b1245 =a[23], b985 =a[23], b = a[23];
        let b326 =a[24], b3298 =a[24], b159 = a[24];
        let b324 =a[25], b753 =a[25], b654 = a[25];
        let b796 =a[26], b0066 =a[26], b08 = a[26];
        let b1111 =a[27], b3596 =a[27], b900 = a[27];
        let b6543 =a[28], b33 =a[28], b9763 = a[28];
        let b982 =a[29], b000 =a[29], b96 = a[29];
        let b877 =a[30], b91 =a[30], b453 = a[30];
        let b407 =a[31], b9022 =a[31], b5441 = a[31];
        let b617 =a[32], b6788 =a[32], b9728 = a[32];
        let b2008 =a[33], b735 =a[33], b16 = a[33];
        let b1991 =a[34], b8 =a[34], b03 = a[34];
        let b1985 =a[35], b9780 =a[35], b805 = a[35];
        let b570 =a[36], b8624 =a[36], b1971 = a[36];
        let b11 =a[37], b4700 =a[37], b533 = a[37];
        let b7009 =a[38], b5682 =a[38], b1469 = a[38];
        let b0085 =a[39], b1966 =a[39], b6487 = a[39];
        let b1973 =a[40], b9814 =a[40], b100 = a[40];
        let b1975 =a[41], b1496 =a[41], b3008 = a[41];
        let b66 =a[42], b0564 =a[42], b6969 = a[42];
        let b0703 =a[43], b9005 =a[43], b83 = a[43];
        let b30035 =a[44], b5954 =a[44], b315 = a[44];
        let b99301 =a[45], b3057 =a[45], b00509 = a[45];
        let b30682= a[46], b06401= a[46], b73081= a[46] ;
        let b2209= a[47], b98564= a[47], b229907= a[47] ;
        let b19= a[48], b96120= a[48], b26008= a[48];
        let b0797 = a[49], b694 = a[49], b225 = a[49];
        let b809 = a[50], b139 = a[50], b7401 = a[50];
        let b635 = a[51], b9836 = a[51], b27006 = a[51];
        let b96654 = a[52], b87654 = a[52], b236 = a[52];
        let b9856 = a[53], b3256 = a[53], b7789 = a[53];
        let b854 = a[54], b5645 = a[54], b00548 = a[54];
        let b0560 = a[55], b80860 = a[55], b8061 = a[55];
        let b4613 = a[56], b05358 = a[56], b8523 = a[56];
        let b50068 = a[57], b3504 = a[57], b56258 = a[57];
        let b0340= a[58], b53528 = a[58], b6037 = a[58];
        let b0856 = a[59], b820 = a[59], b9456 = a[59];
        let b5875 = a[60], b0532 = a[60], b8708 = a[60];
        let b9654 = a[61], b3571 = a[61], b9863 = a[61];
        let b0132 = a[62], b9752 = a[62], b4503 = a[62];
        let b9875 = a[63], b3068 = a[63], b98703 = a[63];
        let b405 = a[64], b9804 = a[64], b69852 = a[64];
        let b3269 = a[65], b0033 = a[65], b852 = a[65];
        let b6361 = a[66], b7835 = a[66], b4569 = a[66];
        let b1236 = a[67], b9853 = a[67], b74369 = a[67];
        let b98007 = a[68], b35404 = a[68], b66044 = a[68];
        let b33049 = a[69], b25646 = a[69], b5978 = a[69];
        // let b8902 = a[70], b897 = a[70], b5469 = a[70];

        // Check if the user input is a valid variable name
        try {
                result = eval(user_input);
        } catch (error) {
            result = "Invalid code used.";
            setTimeout(() => {
                setInput1("");
                setDecoding(false);
                setOutput('');

            }, 3000);
        }


        setTimeout(() => {
            setOutput(result);
        }, 500);
    };

    const handleInputChange = (e) => {
        setInput1(e.target.value);
    };
    
    const decode = (a) => {
        if (input1.trim() === "") {
            codetoword("b98+ b77+ b91+ b0085+ b5682+ b3+ b83+ b311+ b564+ b093+ b9005+ b119+ b311+ b193+ b900+ b787+ b83+ b30682")
            setDecoding(true);
            setTimeout(() => {
                setInput1(a.target.value="");
                setDecoding(false);
                setOutput('');

            }, 3000);
        }else if (input1.includes("a"||'.'||'c'||'='||';'||'/') || !input1.includes("b")){
            codetoword("b98+ b77+ b91+ b0085+ b5682+ b3+ b83+ b311+ b564+ b093+ b9005+ b119+ b311+ b193+ b900+ b787+ b83+ b30682")
            setDecoding(true);
            setTimeout(() => {
                setInput1(a.target.value="");
                setDecoding(false);
                setOutput('');
            }, 3000);
        }

        else {
            codetoword(input1);
            setDecoding(true);
        }
        
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 5000);
    };

    useEffect(() => {
        // Convert first letter after dot to uppercase in the output
        const newOutput = output.split('.').map((sentence) => {
            const trimmedSentence = sentence.trim();
            if (trimmedSentence.length === 0) return ''; // Ignore empty sentences 
            const firstLetter = trimmedSentence[0].toUpperCase(); 
            const restOfSentence = trimmedSentence.slice(1);
            return firstLetter + restOfSentence;
        }).join('. '); 
        setOutput(newOutput);
    }, [output]);

    useEffect(() => {
       
        const newOutput = output.split('\n').map((sentence) => {
            const trimmedSentence = sentence.trim();
            if (trimmedSentence.length === 0) return ''; // Ignore empty sentences 
            const firstLetter = trimmedSentence[0].toUpperCase(); 
            const restOfSentence = trimmedSentence.slice(1);
            return firstLetter + restOfSentence;
        }).join('\n'); 
        setOutput(newOutput);
    }, [output]);

    
    useEffect(() => {
        let i = 0;
        const intervalDuration = 50; // Adjust interval duration as needed
        const timer = setInterval(() => {
            if (i <= output.length) {
                setTypedOutput(output.slice(0, i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, intervalDuration);
    
        return () => clearInterval(timer);
    }, [output]);
    

    const adjustTextareaRows = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; // Reset textarea height
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'; // Set textarea height based on content
        }
    };
const clear = () => {
    setInput1("");
    setDecoding(false);
    setOutput('');
    textareaRef.current.focus();
}

    return (
        <>
            <div className='container'>
                <div className="textarea-container">
                    <textarea
                        className='input'
                        ref={textareaRef}
                        rows={1}
                        placeholder="Enter the code to decode"
                        value={input1}
                        onChange={handleInputChange}
                    />
                     <button className="rev-btn" onClick={decode}><b><i className='clk'>D</i></b></button></div>
            </div>
            {decoding && (
                <div className="output-box">
                    <div>
                        <p className="murgi">The text</p>
                        <button className="copy-button" onClick={handleCopy}>{copied ? 'Copied' : 'Copy'}</button>
                        </div>
                    <pre className='oup'>{typedOutput}</pre>
                </div>
            )}
            <button className='btr'onClick={clear}>Clear</button>
        </>
    );
};

export default CodeToWord;
