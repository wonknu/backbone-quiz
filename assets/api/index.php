<?php

class RestApi {

    /**
     * @var security stuff, not used for demo
     */
    protected $isAllowed;
    
    /**
     * @var security stuff, not used for demo
     */
    protected $param;
    
    /**
     * Constructor
     */
    public function __construct() {
        $this->isAllowed = true; // always allowed for demo project
        $this->getParam();
        $this->route();
    }

    public function getParam() {
        $args = explode(
            '/',
            substr(
                $_SERVER['REDIRECT_URL'],
                strpos($_SERVER['REDIRECT_URL'], 'api'),
                strlen($_SERVER['REDIRECT_URL'])
            )
        );
        array_shift($args);
        $this->param = array();
        for ($i = 0; $i < count($args); $i++) {
            $k = $args[$i];
            $v = ++$i < count($args) ? $args[$i] : null;
            $this->param[$k]= $v;
        }
        
    }
    
    /**
     * route to requested method
     */
    public function route() {
        echo $this->param[0];
        if ( $this->isAllowed && count($this->param) > 0 ) {
            switch (key($this->param)) {
                case 'quiz': $this->getQuiz(); break;
                default: break;
            }
        }
    }
    
    public function getQuiz() {
        header('Content-Type: application/json');
        if($this->param["quiz"] == 0){
            echo json_encode(
                array(
                    'question' => array(
                        'text' => 'Is this a random question?',
                        'id' => 0
                    ),
                    'quiz' => array(
                        '0' => array(
                            'text' => 'answer 00',
                            'id' => 0
                        ),
                        '1' => array(
                            'text' => 'answer 01',
                            'id' => 1
                        ),
                        '2' => array(
                            'text' => 'answer 02',
                            'id' => 2
                        ),
                        '3' => array(
                            'text' => 'answer 03',
                            'id' => 3
                        )
                    )
                )
            );
        }
        else if($this->param["quiz"] >= 1){
            echo json_encode(
                array(
                    'question' => array(
                        'text' => 'Is this a random question?',
                        'id' => 0
                    ),
                    'quiz' => array(
                        '0' => array(
                            'text' => 'answer 10',
                            'id' => 0
                        ),
                        '1' => array(
                            'text' => 'answer 11',
                            'id' => 1
                        ),
                        '2' => array(
                            'text' => 'answer 12',
                            'id' => 2
                        ),
                        '3' => array(
                            'text' => 'answer 13',
                            'id' => 3
                        )
                    )
                )
            );
        }
    }
    
    public function addQuiz() {
        echo 'addQuiz';
    }
    
    public function updateQuiz($id) {
        echo 'updateQuiz';
    }
    
    public function deleteQuiz($id) {
        echo 'deleteQuiz';
    }
}

new RestApi();
?>